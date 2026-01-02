// MOMENTAN NICHT BENUTZT

import { Link } from "@heroui/link";
import { useLayoutEffect, useState } from "react";
import { StarRating } from "react-flexible-star-rating";
import { t } from "i18next";

function formatRelativeTime(timestamp: string): string {
  const reviewDate = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - reviewDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  if (diffYears > 0) {
    return `${diffYears} ${t("time.year")}${diffYears > 1 ? t("time.plural") : ""} `;
  } else if (diffMonths > 0) {
    return `${diffMonths} ${t("time.month")}${diffMonths > 1 ? t("time.plural") : ""} `;
  } else if (diffDays > 0) {
    return `${diffDays} ${t("time.day")}${diffDays > 1 ? t("time.plural") : ""} `;
  } else {
    return t("time.today");
  }
}

export interface Reviews {
  author_link: string;
  author_title: string;
  author_reviews_count: string;
  author_ratings_count: string;
  review_text: string;
  review_link: string;
  review_rating: string;
  review_timestamp: string;
  review_datetime_utc: string;
  review_img_url: string;
  review_photo_ids: string;
  owner_answer?: string;
  owner_answer_timestamp?: string;
  owner_answer_timestamp_datetime_utc?: string;
}

async function getData<T>(path: string): Promise<T> {
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
  }

  const data: T = await response.json();

  return data;
}

export const GoogleReviews = () => {
  const [items, setItems] = useState<Reviews[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await getData<Reviews[]>(
          "/ReviewDataHerrenhausDecember25.json",
        );

        setItems(reviews);
      } catch (e: any) {
        setError(e?.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);
  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <div className="items-end flex flex-col mb-5">
        <div className="flex flex-row items-start ">
          <b className="text-2xl mr-3">4.9 </b>
          <StarRating
            dimension={10}
            initialRating={5}
            isReadOnly={true}
            starsLength={5}
          />
        </div>
        <i>277 reviews</i>
        <i className="text-sm">Google December 25</i>
      </div>
      <div className="flex flex-row overflow-x-scroll max-h-150 overflow-y-hidden">
        {items.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-3  w-100 overflow-y-scroll scrollbar-hide"
          >
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                <Link
                  color="foreground"
                  href={review.author_link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <b className="text-2xl">{review.author_title}</b>
                </Link>
                <i>{review.author_reviews_count} reviews</i>
              </div>

              <div className="text-right">
                <StarRating
                  dimension={9}
                  initialRating={Number(review.review_rating)}
                  isReadOnly={true}
                  starsLength={5}
                />
                <i>{formatRelativeTime(review.review_datetime_utc)}</i>
              </div>
            </div>

            <p>{review.review_text}</p>
            {review.owner_answer && (
              <div className="text-right">
                <div className="flex-col flex mt-5">
                  <b className="text-2xl">Bernhard Fischer</b>
                  <i>{formatRelativeTime(review.review_datetime_utc)}</i>
                </div>
                <p>{review.owner_answer}</p>
              </div>
            )}
            <Link
              href={review.review_link}
              rel="noopener noreferrer"
              style={{ color: "#659bffff", marginTop: "10px" }}
              target="_blank"
            >
              Mehr Info
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
