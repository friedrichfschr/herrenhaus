import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

export const keysToLanguages = {
  de: "Deutsch",
  gb: "English",
  fr: "Français",
  es: "Español",
};

i18n

  // detect user language

  // learn more: https://github.com/i18next/i18next-browser-languageDetector

  .use(LanguageDetector)

  // pass the i18n instance to react-i18next.

  .use(initReactI18next)

  // init i18next

  // for all options read: https://www.i18next.com/overview/configuration-options

  .init({
    debug: true,

    fallbackLng: "de",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      de: {
        translation: {
          start: {
            intro: `Das Herrenhaus Fischer wurde 1998 von Bernhard und Diana Fischer
              in Brakel gegründet und steht seither für hochwertige Mode für
              Männer – von der Jeans bis zum Mantel, vom Hemd bis zum festlichen
              Anzug. Mit Leidenschaft für Qualität, Passform und persönliche
              Beratung hat sich das Haus zu einem führenden Spezialisten für
              Bräutigam-Mode entwickelt. Heute vertrauen Kunden aus einem weiten
              Einzugsgebiet zwischen Dortmund, Hannover, Kassel und darüber
              hinaus auf die Kompetenz und den Service des Herrenhaus Fischer.`,
          },
          festlich: {
            intro1:
              "Liebe Freunde und Freundinnen von Festlichkeit, Stil und Mode,",
            intro2: `seit 1998 bin ich der Herrenausstatter für den Bräutigam und
                seine Gäste. Die größer werdenden Wünsche nach Individualität,
                Klasse und Nachhaltigkeit sind eine ordentliche Herausforderung.
                Umso mehr Freude bereitet es mir, Kunden auf dem Weg zu „Ihrem
                wichtigsten Tag“ ein kleines Wegstück zu begleiten. Ich freue
                mich auf Euch!`,
            gruß: "Herzlichst",
            accordion: {
              1: "Für den Bräutigam und seine Gäste",
              2: "Unsere Marken",
              3: "Fotoshootings",
              4: "Von unseren Kunden",
            },
            buttons: {
              1: {
                title: "Für den Bräutigam",
                texts: {
                  text1:
                    "Der Anzug für die Hochzeit soll etwas ganz Besonderes sein. Der Bräutigam steht gemeinsam mit der Braut auch optisch im Mittelpunkt. Das erreichen wir mit ausgefallenen Styles, mit Trachten- oder Militaryelementen und Anleihen an modischen Stilen längst vergangener Epochen. Hier ist der Phantasie kaum eine Grenze gesetzt und wir fertigen gerne auch individuelle Outfits an.",
                  title2: "Vintage? Boho? Retro?",
                  text2:
                    "Hochzeiten werden mittlerweile gerne unter bestimmten Motto-Aspekten zelebriert. Der glamouröse Stil der „Goldenen Zwanziger“, der coole Style der „Sixties“, ganz klassisch oder die lässige Scheunenfete stellen natürlich eine Herausforderung auch für das Outfit des Brautpaares dar. Wie auch immer das Motto genannt wird, wir bieten verschiedene Outfits zu den entsprechenden Themen an.",
                  title3: "Klassiker",
                  text3:
                    "Frack, Cut, Smoking und Co finden auch immer wieder Fans. Der klassische Hochzeitsanzug beim Adel, in England und in Hollywood-Blockbustern ist definitiv der graue Cut mit Stresemannhose. Mittlerweile als viel beliebtere Alternative hat sich der junge Smoking etabliert, der sowohl elegant als auch modern wirkt und sich durch seine Vielseitigkeit auszeichnet.",
                  title4: "Kosten?",
                  text4:
                    "Im Durchschnitt gibt ein Bräutigam etwa 1250,- € für ein komplettes Outfit aus. Schöne Outfits haben Ihren Preis. Wir sind uns jedoch sicher, dass für die meisten Geldbeutel das passende Outfit zu finden ist. Unsere „Menüs“ sollen hier ein Richtwert sein, damit Sie Ihr Budget passend planen können:",
                  price1: "Gut und günstig.",
                  priceText1:
                    "Ein komplettes Outfit könnte z.B. so oder so ähnlich aussehen: Eleganter Anzug, schickes Cityhemd, Krawatte komplett ab 400,- €",
                  price2: "Bezahlbar elegant.",
                  priceText2:
                    "Festlicher Anzug, Galahemd und Schleife mit Ziertuch ab 600,- €",
                  price3: "Wertig komplett.",
                  priceText3:
                    "Festlicher Anzug mit Schmuckweste, Plastron oder Schleife und Ziertuch, Galahemd, Manschettenknöpfe zusammen ab 900,- €",
                  price4: "Spektakulär teuer.",
                  priceText4:
                    "Ausgefallener Anzug mit besonderen Elementen, passende Weste und Accessoires, Galahemd, Manschettenknöpfe evtl. individuell angefertigt kostet zusammen ungefähr 1200,- €",
                  title5: "Extras?",
                  text5:
                    "Der Preis des Anzugs allein ist also nicht entscheidend. Denken Sie auch an die Kleinteile, die evtl. noch benötigt werden. Benötigen Sie elegante Schuhe? Ab 120,- € bis 200,- € Gürtel oder Hosenträger nicht vergessen, ab 30,-€ bis 100,- € Manschettenknöpfe kosten bei uns 39,95 € bis 59,95 € und sind in verschiedenen Stilen erhältlich. Bei Unterhemd oder T-Shirt sind oft unschöne Kanten durch das helle Oberhemd zu sehen. Wir empfehlen das Tank-Top zu 19,95 € in weiß oder hautfarben. Der Preis vom Änderungsservice ist in der Regel abhängig von der erbrachten Dienstleistung. Wir nennen Ihnen schon vorher die Kosten und die sind dann auch fix. Eine individuelle Anfertigung kostet in der Regel nicht mehr als ein fertiges Kleidungsstück. Teurer wird es nur bei mangelnder Zeit oder besonderer Maßfertigung.",
                },
              },
              2: {
                title: "Der Trauzeuge",
                texts: {
                  title1: "Styles",
                  text1:
                    "Natürlich wird der Trauzeuge sich ebenfalls elegant kleiden. Jedoch immer etwas dezenter als der Bräutigam. Es gibt hier keine besondere gesellschaftliche Erwartungshaltung. Allerdings wird das Brautpaar eventuell Wünsche äußern.",
                  title2: `„Best man“ – und das sieht man auch!"`,
                  text2:
                    "Ein beliebter Trend bei dem Trauzeugen ist in der dezenten Ausgestaltung der Accessoires zu sehen, die perfekt auf das Outfit des Bräutigams abgestimmt werden. So kann der Trauzeuge seine Verbundenheit z.B. dadurch ausdrücken, dass seine Schleife mit Hosenträgern kombiniert im selben Design gefertigt sind wie die Weste mit Plastron des Bräutigams.",
                },
              },
              3: {
                title: "Gäste und Familie des Brautpaares",
                texts: {
                  title1: "Dem festlichen Anlass entsprechend!",
                  text1:
                    "Anlassmode heißt so, weil Sie einem bestimmten Anlass entsprechen soll. In unserer freien Gesellschaft ist das Tragen von formeller Kleidung mittlerweile nicht mehr Standard. Kleider machen zwar immer noch Leute, aber Kleidung ist in vielen Berufen kein Muss für Aufstiegschancen. Daher kommen wir oft eher lässig leger daher. Was dem Anlass entsprechend heißt, bestimmt jeder selbst für sich. Zumindest sollte man sich hinterfragen und berücksichtigen, dass das Brautpaar sich sehr viel Mühe mit der Ausgestaltung ihres wichtigen Tages gibt und sich wahrscheinlich wünscht, dass sich auch die Gäste entsprechend kleiden.",
                  title2: "Lässig und trotzdem chic?",
                  text2:
                    "Es muss auch nicht immer die formelle Anlasskleidung sein. Als Gast kann ich mit einer sportlicheren Chino und gepflegtem Oberteil auch eine gute Figur machen. Im Zweifel lohnt es sich, nachzufragen, ob ein bestimmter Dress-Code einzuhalten ist.",
                },
              },
              4: {
                title: "Tipps für den Bräutigam",
                texts: {
                  text1:
                    "Das Outfit für den „Schönsten Tag des Lebens“ auszusuchen sollte Freude bereiten und nicht stressen!",
                  tipp1:
                    "Rechtzeitig losgehen, falls eine Anfertigung nötig ist. Diese dauert ca. 6-16 Wochen. Um alle Möglichkeiten nutzen zu können, empfehlen wir eine Terminvereinbarung circa 6 Monate vor der Hochzeit.",
                  tipp2:
                    "Eine Terminvereinbarung ist unbedingt nötig. So können telefonisch auch schon ein paar Fragen geklärt werden.",
                  tipp3: "Überlegt Euch ein Budget und sprecht auch darüber.",
                  tipp4:
                    "Lasst Euch nicht zu viele Vorgaben machen. Natürlich sind die Wünsche der Braut wichtig, aber in erster Linie müsst auch Ihr Euch wohlfühlen.",
                  tipp5:
                    "Auf Hochzeitsmessen oder im Internet kann man sich schon etwas mit dem Thema Hochzeitsanzug auseinandersetzen. Prospekte, Zeitschriften und Internetseiten zeigen immer nur die halbe Wahrheit. Probieren Sie unterschiedliche Styles an sich selbst aus, um sicher zu sein, welches der Richtige für Sie ist.",
                  tipp6:
                    "Auf Hochzeitsmessen oder im Internet kann man sich schon etwas mit dem Thema Hochzeitsanzug auseinandersetzen. Prospekte, Zeitschriften und Internetseiten zeigen immer nur die halbe Wahrheit. Probieren Sie unterschiedliche Styles an sich selbst aus, um sicher zu sein, welches der Richtige für Sie ist.",
                  tipp7:
                    "Bringen Sie gerne Berater zum Termin mit, z.B. Eltern, Braut oder Freunde, aber denken Sie daran, dass zu viele Berater auch verunsichern können. (Bringen Sie möglichst nicht Mutter und Schwiegermutter gleichzeitig als Berater mit. Es sei denn, die beiden sind beste Freundinnen…)",
                  tipp8:
                    "Welche Stilrichtung hat das Brautkleid? Ist es weiß oder elfenbeinfarben? Gerne kann die Braut auch ein Bild ihres Kleides übermitteln. Dann können wir im Feintuning gezielter beraten.",
                },
              },
            },
            markenTexte: {
              Wilvorst:
                "Wilvorst steht für über 100 Jahre Erfahrung in stilvoller Herrenmode und ist Marktführer bei Hochzeits- und Festanzügen. Die Kombination aus edlen Stoffen, perfekter Passform und einer großen Vielfalt an modernen wie klassischen Styles begeistert immer wieder aufs Neue. Jedes Stück vereint Handwerkskunst, Eleganz und Qualität – ideal für den besonderen Auftritt.",
              "Roberto Vicentti":
                "Roberto Vicentti begeistert mit außergewöhnlichen Designs, die den Bräutigam stilvoll in den Mittelpunkt rücken. Die Outfits verbinden elegante Linien mit besonderen Details und machen jeden Auftritt einzigartig. Portugiesische Handwerkskunst trifft hier auf modernes Design – für einen unvergesslichen Hochzeitsmoment.",
              "Kastell Wedding":
                "Kastell Wedding vereint traditionelle Eleganz und hochwertige Verarbeitung mit modernen Akzenten. So entstehen zeitlose Outfits, die Stil, Qualität und ein klares modisches Statement perfekt verbinden. Jeder Bräutigam findet hier einen Look, der seinen besonderen Tag unvergesslich macht.",
              Digel:
                "Digel begeistert durch sein enormes Portfolio – von sportlichen, bequemen Stretch-Anzügen über elegante Businesslooks bis hin zu festlichen Outfits für den großen Auftritt. Besonders schätze ich die Vielseitigkeit: Ob Bräutigam, Trauzeuge, jüngerer Bruder oder ein Mann mit stabilerer Figur – Digel bietet für jeden Typ und jede Lebenssituation das passende Outfit. Die Kombination aus modernem Design, hohem Tragekomfort und hervorragender Passform macht Digel für mich zu einer Marke, die einfach immer überzeugt.",
              Tziacco:
                "Tziacco steht für royale Outfits, die jeden Bräutigam in einen außergewöhnlichen Look hüllen – individuell, einzigartig und voller Ausstrahlung. Männer lieben diese besonderen Styles, die man nicht an jeder Ecke findet und die pure Eleganz verkörpern. Mit unserer starken Auswahl und der Möglichkeit von Anfertigungen erfüllen wir nahezu jeden Wunsch und machen den Hochzeitsanzug zu etwas wirklich Unvergesslichem.",
              Una: "Una Germany steht für hochwertige Accessoires „Made in Germany“ – mit Liebe zum Detail, nachhaltigen Materialien und perfekter Verarbeitung. Ich schätze die enorme Auswahl an Krawatten, Fliegen, Westen und vielem mehr, die für jeden Anlass den passenden Akzent setzt. Besonders begeistert mich, dass Tradition, Qualität und moderne Styles hier so selbstverständlich Hand in Hand gehen.",
              Olymp:
                "Olymp ist Marktführer im Segment der Cityhemden und überzeugt mit höchster Qualität und perfekter Passform. In unserer festlichen Abteilung schätzen wir besonders die eleganten Galahemden – von der schlanken Linie Level 5 bis zu den extra schmal geschnittenen No.6. Dank unseres starken Angebots können wir vielen Kunden genau das Hemd bieten, das nicht nur optimal sitzt, sondern auch den besonderen Auftritt stilvoll abrundet.",
              Eterna:
                "Eterna ist ein traditionsreicher Hemdenhersteller aus Passau, der seit 1863 für Qualität und Innovation steht und heute noch in Europa produziert. Besonders überzeugt ETERNA durch seine blickdichten Qualitäten, die gerade bei festlichen Anlässen und unter hellen Anzügen für absolute Sicherheit sorgen. Wir führen Galahemden in verschiedenen Passformen – Slim Fit, Modern Fit und Comfort Fit – sodass vom schlanken Bräutigam bis hin zum sehr großen oder kräftigeren Mann jeder die perfekte Passform findet. ETERNA verbindet hochwertige Stoffe, exzellente Schnitte und eine faire, europäische Fertigung – ein echter Gewinn für unsere festliche Abteilung.",
              Lindenmann:
                "Lindenmann Accessoires sind das i-Tüpfelchen jedes festlichen Outfits – sie verleihen dem Look Persönlichkeit und Stil. Mit hochwertigen Manschettenknöpfen, eleganten Gürteln und klassischen Hosenträgern von Lindenmann setzen wir genau die Akzente, die ein Ensemble komplett und besonders machen. So wird aus einem guten Anzug ein perfekter Auftritt.",
              Abrazi:
                "Wir führen exklusive Manschettenknöpfe und weitere Accessoires von Abrazi – handgefertigt und veredelt mit Einlagen aus farbigem Leder oder edlem Holz. Diese wertvollen Details setzen stilvolle Akzente und vollenden jedes festliche Outfit mit Charakter und Klasse.",
              Lloyd:
                "Lloyd Schuhe stehen für edles Design, höchste Qualität und besten Tragekomfort – genau das schätzen wir in unserer festlichen Abteilung. Ob klassisch-elegant oder modern, sie runden jedes Outfit perfekt ab und geben dem Bräutigam wie auch den Gästen die Sicherheit, den ganzen Tag stilvoll und bequem aufzutreten.",
              "Digel Schuhe":
                "Digel Schuhe sind die perfekte Ergänzung zu den festlichen Anzügen der Marke. Sie verbinden edles Design mit hohem Tragekomfort und sorgen dafür, dass Bräutigam, Trauzeugen oder Gäste von Kopf bis Fuß stilvoll und harmonisch gekleidet sind. So entsteht ein Gesamtauftritt, der Eleganz und Sicherheit gleichermaßen ausstrahlt.",
            },
          },
          männermode: {
            text1:
              "Männermode für jeden Tag – mit Stil, Haltung und Charakter Männermode ist mehr als Kleidung – sie ist Ausdruck von Persönlichkeit. Im Herrenhaus Fischer finden Männer Outfits, die genau das widerspiegeln: authentisch, modern und immer mit dem gewissen Etwas. Ob im Büro, unterwegs oder beim Feierabenddrink – unsere Looks begleiten Sie durch den Tag.",
            text2:
              "Marken wie Eterna, Marvelis und Cinque stehen für elegante Businessmode, die Komfort und Klasse verbindet.",
            text3:
              "Für alle, die es lässiger mögen, bieten New Zealand Auckland oder Replay entspannte Freizeit-Styles mit Charakter – sportlich, robust und stilbewusst zugleich.",
            text4:
              "Und mit Alberto erleben Sie Hosen, die Bewegung zulassen, ohne an Form oder Stil zu verlieren.",
            text5:
              "Vom feinen Hemd bis zur coolen Outdoorjacke – wir helfen Ihnen, Looks zu finden, die zu Ihrem Alltag passen und Ihre Persönlichkeit unterstreichen. Entdecken Sie Mode, die Sie nicht verkleidet, sondern begleitet – Tag für Tag. ",
          },
          schützenfest: {
            text1:
              "Alles für den Schützen – weil Stil auch beim Feiern zählt. Wenn in Brakel wieder die Trommeln wirbeln und das Bier kaltgestellt ist, wissen wir: Es ist Schützenzeit! Und im Herrenhaus Fischer finden alle Schützen, Hauptmänner und Fahnenträger alles, was sie für ein rundum gelungenes Fest brauchen. Unsere weißen Hemden gibt es in gleich vier Passformen – comfort fit, modern fit, body fit und extra slim fit – damit vom gestandenen Vereinsvorsitzenden bis zum Jungschützen jeder gut aussieht. Langarm oder Halbarm? Ganz nach Wetterlage und Bierlaune. Dazu bieten wir Uniformhosen in Schwarz oder Weiß – natürlich in allen Größen, wie es sich gehört. Für den letzten Schliff sorgen unsere Schützenkrawatten mit Ehrenscheibe oder dem Brakeler Wappen, weiße Handschuhe, die klassischen schwarzen Schützenmützen und – auf Bestellung – Uniformjacken, Hüte und Zubehör. Unser Tipp: Rechtzeitig vorbeikommen, anprobieren und dann entspannt feiern. Denn wer früh einkauft, hat beim Fest nur noch eine Sorge: dass das Bier nicht ausgeht.",
            text2: `Bernhard Fischer mit Ehefrau Diana König der Schützenbruderschaft St. Georg e.V. Riesel 2023/24 und Bezirkskönig im Bezirksverband Höxter der Historischen Deutschen Schützenbruderschaften.`,
          },
          kontakt: {
            title1: "Ladenöffnungszeiten",
            hour1v1:
              "Montag bis Freitag von 10.00 bis 13.00 und 15.00 bis 18.00 Uhr",
            hour1v2: "Samstag von 10.00 bis 14.00 Uhr",
            title2: "Beratung nach Terminvereinbarung",
            hour2: "Montag bis Samstag von 8.00 bis 21.00 Uhr",
            label: {
              email: "Email",
              name: "Name",
              firma: "Firma",
              nachricht: "Nachricht",
            },
            placeholder: {
              email: "Ihre Email Adresse",
              name: "Ihr Name",
              firma: "Ihre Firma",
              nachricht: "Ihre Nachricht",
            },
            errorMessageEmail:
              "Bitte geben sie eine korrekte Email Addresse ein.",
            errorMessageRecaptcha:
              "Bitte bestätigen Sie erst, dass Sie kein Roboter sind.",
            errorTitle: "Etwas ist schief gelaufen...",
            errorDescription:
              "Bitte schreiben Sie uns direkt eine Mail oder rufen Sie uns gerne an.",
            sendButton: "Absenden",
          },

          time: {
            year: "Jahr",
            month: "Monat",
            day: "Tag",
            today: "Heute",
            plural: "e",
          },
          routes: {
            Start: "Start",
            "Festliche Herrenmode": "Festliche Herrenmode",
            Männermode: "Männermode",
            Termine: "Termine",
            "Klara Fischer": "Klara Fischer",
            Schützenfest: "Schützenfest",
            Kontakt: "Kontakt & Öffnungszeiten",
            Empfehlungen: "Empfehlungen",
          },
        },
      },

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      gb: {
        translation: {
          start: {
            intro: `Herrenhaus Fischer was founded in 1998 by Bernhard and Diana Fischer
              in Brakel and has since stood for high-quality menswear –
              from jeans to coats, from shirts to formal suits. With a passion
              for quality, fit, and personal advice, the store has developed
              into a leading specialist for groom's fashion. Today, customers
              from a wide catchment area between Dortmund, Hanover, Kassel,
              and beyond rely on the expertise and service of Herrenhaus Fischer.`,
          },
          festlich: {
            intro1: "Dear friends of festivity, style, and fashion,",
            intro2: `since 1998 I have been the menswear outfitter for the groom and
                his guests. The growing desires for individuality, class, and
                sustainability are quite a challenge. All the more joy it gives
                me to accompany customers on the way to "their most important
                day" for a small part of the journey. I look forward to seeing
                you!`,
            gruß: "Sincerely",
            accordion: {
              1: "For the groom and his guests",
              2: "Our brands",
              3: "Photo shootings",
              4: "From our customers",
            },
            buttons: {
              1: {
                title: "For the Groom",
                texts: {
                  text1:
                    "The suit for the wedding should be something truly special. Together with the bride, the groom is also visually at the center of attention. We achieve this with extraordinary styles, with traditional or military elements, and inspirations from fashionable styles of long past eras. There are hardly any limits to creativity here, and we are also happy to create individual outfits.",
                  title2: "Vintage? Boho? Retro?",
                  text2:
                    "Nowadays, weddings are often celebrated under specific theme concepts. The glamorous style of the “Roaring Twenties,” the cool style of the “Sixties,” a very classic approach, or a relaxed barn party naturally also pose a challenge for the wedding couple’s outfit. Whatever the theme may be called, we offer various outfits for the corresponding themes.",
                  title3: "Classics",
                  text3:
                    "Tailcoat, morning coat, tuxedo, and the like continue to have their fans. The classic wedding suit among nobility, in England, and in Hollywood blockbusters is definitely the gray morning coat with striped trousers. As a much more popular alternative nowadays, the modern tuxedo has established itself, which appears both elegant and contemporary and stands out due to its versatility.",
                  title4: "Costs?",
                  text4:
                    "On average, a groom spends about €1,250 on a complete outfit. Beautiful outfits have their price. However, we are confident that the right outfit can be found for most budgets. Our “menus” are intended as a guideline to help you plan your budget accordingly:",
                  price1: "Good and affordable.",
                  priceText1:
                    "A complete outfit could look like this, for example: Elegant suit, stylish city shirt, tie — complete from €400",
                  price2: "Affordable elegance.",
                  priceText2:
                    "Festive suit, gala shirt, and bow tie with pocket square from €600",
                  price3: "High-quality complete.",
                  priceText3:
                    "Festive suit with decorative vest, plastron or bow tie and pocket square, gala shirt, cufflinks — all together from €900",
                  price4: "Spectacularly expensive.",
                  priceText4:
                    "An extraordinary suit with special elements, matching vest and accessories, gala shirt, cufflinks possibly custom-made — costs approximately €1,200 in total",
                  title5: "Extras?",
                  text5:
                    "So the price of the suit alone is not the deciding factor. Also think about the small items that may still be needed. Do you need elegant shoes? From €120 to €200. Don’t forget belt or suspenders, from €30 to €100. Cufflinks cost between €39.95 and €59.95 with us and are available in various styles. With undershirts or T-shirts, unattractive edges are often visible through the light-colored dress shirt. We recommend the tank top for €19.95 in white or skin tone. The price of alteration services usually depends on the service provided. We will inform you of the costs in advance, and they are then fixed. A custom-made item usually does not cost more than a ready-made garment. It only becomes more expensive if time is limited or special tailoring is required.",
                },
              },
              2: {
                title: "The Best Man",
                texts: {
                  title1: "Styles",
                  text1:
                    "Of course, the best man will also dress elegantly. However, always a bit more subtly than the groom. There are no specific social expectations here. However, the wedding couple may express certain wishes.",
                  title2: `“Best man” – and you can see it!"`,
                  text2:
                    "A popular trend among best men can be seen in the subtle design of accessories that are perfectly coordinated with the groom’s outfit. In this way, the best man can express his connection, for example, by wearing a bow tie combined with suspenders in the same design as the groom’s vest with plastron.",
                },
              },
              3: {
                title: "For Guests and Family",
                texts: {
                  title1: "Appropriate for the festive occasion!",
                  text1:
                    "Occasion wear is called that because it should correspond to a specific occasion. In our free society, wearing formal clothing is no longer the standard. Clothes may still make the man, but clothing is no longer a must for career advancement in many professions. Therefore, we often appear more casually dressed. What is considered appropriate for the occasion is determined individually. At the very least, one should question oneself and consider that the wedding couple puts a great deal of effort into organizing their important day and probably wishes that guests also dress accordingly.",
                  title2: "Casual and still chic?",
                  text2:
                    "It doesn’t always have to be formal occasion wear. As a guest, you can also make a good impression with a sportier chino and a well-groomed top. When in doubt, it’s worth asking whether a specific dress code should be followed.",
                },
              },
              4: {
                title: "Tips for the Groom",
                texts: {
                  text1:
                    "Choosing the outfit for the “most beautiful day of your life” should be enjoyable and not stressful!",
                  tipp1:
                    "Start early if custom tailoring is required. This takes about 6–16 weeks. To be able to take advantage of all options, we recommend making an appointment around 6 months before the wedding.",
                  tipp2:
                    "An appointment is absolutely necessary. This way, a few questions can already be clarified by phone.",
                  tipp3: "Think about a budget and talk about it as well.",
                  tipp4:
                    "Don’t let too many requirements be imposed on you. Of course, the bride’s wishes are important, but above all, you also need to feel comfortable.",
                  tipp5:
                    "At wedding fairs or on the internet, you can already familiarize yourself a bit with the topic of wedding suits. Brochures, magazines, and websites always show only half the truth. Try different styles on yourself to be sure which one is right for you.",
                  tipp6:
                    "At wedding fairs or on the internet, you can already familiarize yourself a bit with the topic of wedding suits. Brochures, magazines, and websites always show only half the truth. Try different styles on yourself to be sure which one is right for you.",
                  tipp7:
                    "Feel free to bring advisors to the appointment, e.g., parents, the bride, or friends, but remember that too many advisors can also be confusing. (If possible, do not bring mother and mother-in-law at the same time as advisors—unless the two are best friends…)",
                  tipp8:
                    "What style does the wedding dress have? Is it white or ivory? The bride is welcome to provide a picture of her dress. Then we can give more targeted advice during fine-tuning.",
                },
              },
            },
          },
          time: {
            year: "year",
            month: "month",
            day: "day",
            today: "today",
            plural: "s",
          },
          routes: {
            Start: "Start",
            "Festliche Herrenmode": "Festive Menswear",
            Männermode: "Menswear",
            Termine: "Events",
            "Klara Fischer": "Klara Fischer",
            Schützenfest: "Schützenfest",
            Kontakt: "Contact & Opening Hours",
            Empfehlungen: "Recommendations",
          },
        },
      },
      fr: {
        time: {
          year: "an",
          month: "mois",
          day: "jour",
          today: "aujourd'hui",
          plural: "s",
        },
        translation: {
          routes: {},
        },
      },
      es: {
        translation: {
          time: {
            year: "año",
            month: "mes",
            day: "día",
            today: "hoy",
            plural: "s",
          },
          routes: {
            About: "Moi",
            Resumé: "Resumé",
            Projects: "Projets",
            Blog: "Blog",
          },
        },
      },
    },
  });

export default i18n;
