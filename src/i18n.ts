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
            fotoshootings: {
              organisation: "Organisation durch",
              brautmode: "Brautmode von",
              fotografie: "Fotografie",
            },
            reviews: {
              reviewLinkText: "Zum Review",
              review1:
                "Ich habe hier meinen Hochzeitsanzug gekauft und bin absolut begeistert! Die Beratung war freundlich, professionell und sehr aufmerksam. Man nimmt sich Zeit, geht auf Wünsche ein und sorgt dafür, dass man am Ende wirklich zufrieden nach Hause geht. Für zukünftige Feiern werde ich definitiv wieder hierherkommen.",
              review2:
                "Ich habe heute im Herrenhaus Fischer einen Anzug gekauft und bin absolut begeistert – sowohl vom Anzug selbst als auch von der Beratung. Schon beim Betreten des Geschäfts spürt man die Liebe zum Detail und die Leidenschaft für klassische Herrenmode. Die Atmosphäre ist stilvoll und einladend. Besonders hervorheben möchte ich die äußerst kompetente und individuelle Beratung. Es wurde sich viel Zeit genommen, um auf meine Wünsche und Vorstellungen einzugehen. Dabei war die Beratung nicht nur fachlich top, sondern auch sehr freundlich und angenehm – man fühlt sich als Kunde wirklich wertgeschätzt. Am Ende habe ich einen perfekt sitzenden Anzug gefunden, der genau meinen Geschmack trifft. Ich kann das Herrenhaus Fischer uneingeschränkt empfehlen – für alle, die Wert auf Qualität, Stil und exzellenten Service legen.",
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
          empfehlungen: {
            brautmode: "Brautmode",
            fotografie: "Fotografie",
            dekoration: "Dekoration",
            Spaß: "Spaß & Eventtechnik",
          },
          footer: {
            design: "Design von ",
          },

          time: {
            year: "Jahr",
            month: "Monat",
            day: "Tag",
            today: "Heute",
            plural: "e",
            may: "Mai",
            september: "September",
            december: "Dezember",
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

      gb: {
        translation: {
          start: {
            intro:
              "Herrenhaus Fischer was founded in 1998 by Bernhard and Diana Fischer in Brakel and has since stood for high-quality menswear – from jeans to coats, from shirts to formal suits. With a passion for quality, fit and personal service, the store has developed into a leading specialist for groom fashion. Today, customers from a wide surrounding area between Dortmund, Hanover, Kassel and beyond place their trust in the expertise and service of Herrenhaus Fischer.",
          },
          festlich: {
            intro1: "Dear friends of festivity, style and fashion,",
            intro2:
              "since 1998 I have been the menswear outfitter for the groom and his guests. The growing desire for individuality, class and sustainability is quite a challenge. All the more joy it brings me to accompany customers for a small part of the journey toward “their most important day.” I look forward to seeing you!",
            gruß: "Warm regards",
            accordion: {
              "1": "For the groom and his guests",
              "2": "Our brands",
              "3": "Photo shoots",
              "4": "From our customers",
            },
            buttons: {
              "1": {
                title: "For the Groom",
                texts: {
                  text1:
                    "The wedding suit should be something truly special. Together with the bride, the groom is visually at the center of attention. We achieve this with extraordinary styles, with traditional or military elements and influences from fashion eras long gone. Creativity here knows almost no limits and we are also happy to create individual outfits.",
                  title2: "Vintage? Boho? Retro?",
                  text2:
                    "Weddings are now often celebrated under specific theme concepts. The glamorous style of the “Roaring Twenties,” the cool look of the “Sixties,” classic elegance or a relaxed barn celebration all present their own challenges for the wedding couple’s outfits. Whatever the theme may be called, we offer a variety of outfits to match.",
                  title3: "Classics",
                  text3:
                    "Tails, morning coat, tuxedo & co. always find their fans. The classic wedding suit among nobility, in England and in Hollywood blockbusters is definitely the grey morning coat with striped trousers (Stresemann). Today, the modern tuxedo has established itself as a far more popular alternative – elegant yet modern and impressively versatile.",
                  title4: "Costs?",
                  text4:
                    "On average, a groom spends around €1,250 on a complete outfit. Beautiful outfits come at a price. However, we are confident that we have suitable options for most budgets. Our “menus” are intended as guidance so you can plan your budget realistically:",
                  price1: "Good and affordable.",
                  priceText1:
                    "A complete outfit might look something like this: elegant suit, stylish city shirt, tie – complete from €400",
                  price2: "Elegantly affordable.",
                  priceText2:
                    "Formal suit, gala shirt and bow tie with pocket square from €600",
                  price3: "High-quality complete.",
                  priceText3:
                    "Formal suit with decorative waistcoat, cravat or bow tie and pocket square, gala shirt, cufflinks together from €900",
                  price4: "Spectacularly expensive.",
                  priceText4:
                    "An extravagant suit with special elements, matching waistcoat and accessories, gala shirt, cufflinks, possibly custom-made – together approximately €1,200",
                  title5: "Extras?",
                  text5:
                    "So the price of the suit alone is not decisive. Please also think of the smaller items you may still need. Elegant shoes? From €120 to €200. Don’t forget belts or suspenders from €30 to €100. Our cufflinks cost €39.95 to €59.95 and are available in various styles. With undershirts or T-shirts, visible edges can often show through light shirts. We recommend our tank top at €19.95 in white or skin tone. The price of alteration services usually depends on the work required. We will always tell you the cost in advance – and those prices are fixed. A custom-made garment usually does not cost more than a finished piece. It only becomes more expensive with very short deadlines or highly specialized tailoring.",
                },
              },
              "2": {
                title: "The Best Man",
                texts: {
                  title1: "Styles",
                  text1:
                    "Of course, the best man will also dress elegantly – but always a little more discreetly than the groom. There is no particular social expectation here. However, the wedding couple may express preferences.",
                  title2: "“Best man – and you can see it!”",
                  text2:
                    "A popular trend for the best man is subtle coordination of accessories perfectly matched to the groom’s outfit. This way, the best man can express his closeness to the groom – for example by wearing a bow tie and suspenders in the same design as the groom’s waistcoat and cravat.",
                },
              },
              "3": {
                title: "Guests and Family of the Wedding Couple",
                texts: {
                  title1: "Appropriate to the festive occasion!",
                  text1:
                    "Occasionwear is named so because it should suit a particular occasion. In our free society, formal clothing is no longer standard. Clothes still make an impression, but in many professions they are no longer essential for career advancement. So we often appear rather casually dressed. What is “appropriate to the occasion” is ultimately up to each individual. However, one should at least consider that the wedding couple invest a lot of effort into their big day and very likely hope that the guests will dress accordingly.",
                  title2: "Casual yet chic?",
                  text2:
                    "Formal occasionwear is not always necessary. As a guest, I can also look great in smart chinos and a well-kept top. If unsure, it is definitely worth asking whether there is a specific dress code.",
                },
              },
              "4": {
                title: "Tips for the Groom",
                texts: {
                  text1:
                    "Choosing the outfit for the “most beautiful day of your life” should be fun – not stressful!",
                  tipp1:
                    "Start early, especially if a custom-made garment is required. This takes around 6–16 weeks. To make use of all possibilities, we recommend arranging an appointment about 6 months before the wedding.",
                  tipp2:
                    "Making an appointment is absolutely necessary. This way, some questions can already be clarified by phone.",
                  tipp3: "Think about a budget – and talk about it openly.",
                  tipp4:
                    "Don’t let others dictate too much to you. Of course, the bride’s wishes are important – but first and foremost, you should feel comfortable.",
                  tipp5:
                    "Wedding fairs or the internet can be helpful for first inspiration. Brochures, magazines and websites only show part of the truth. Try different styles on yourself to be sure which one really suits you.",
                  tipp6:
                    "Wedding fairs or the internet can be helpful for first inspiration. Brochures, magazines and websites only show part of the truth. Try different styles on yourself to be sure which one really suits you.",
                  tipp7:
                    "Feel free to bring advisors along – parents, the bride or friends – but remember that too many opinions can also be confusing. (If possible, don’t bring both mother and mother-in-law together – unless they happen to be best friends…)",
                  tipp8:
                    "What style is the wedding dress? Is it white or ivory? The bride is also welcome to send us a picture of her dress so we can advise you even more precisely during the fine-tuning.",
                },
              },
            },
            markenTexte: {
              Wilvorst:
                "Wilvorst stands for over 100 years of experience in stylish menswear and is the market leader in wedding and formal suits. The combination of fine fabrics, perfect fit and a wide range of both modern and classic styles continues to inspire time and again. Every piece combines craftsmanship, elegance and quality – ideal for that special appearance.",
              "Roberto Vicentti":
                "Roberto Vicentti excites with extraordinary designs that stylishly place the groom at the center of attention. The outfits combine elegant lines with distinctive details, making every appearance unique. Portuguese craftsmanship meets modern design – for an unforgettable wedding moment.",
              "Kastell Wedding":
                "Kastell Wedding combines traditional elegance and high-quality workmanship with modern accents. The result is timeless outfits that perfectly unite style, quality and a strong fashion statement. Every groom can find a look here that makes his special day unforgettable.",
              Digel:
                "Digel impresses with its enormous range – from sporty, comfortable stretch suits to elegant business looks and festive outfits for the big occasion. What I especially appreciate is the versatility: whether groom, best man, younger brother or a man with a sturdier figure – Digel offers the right outfit for every type and every life situation. The combination of modern design, high wearing comfort and excellent fit makes Digel a brand that never fails to convince.",
              Tziacco:
                "Tziacco stands for royal-style outfits that wrap every groom in an exceptional look – individual, unique and full of presence. Men love these special styles that you don’t see everywhere and that embody pure elegance. With our strong selection and custom-made options, we fulfill almost every wish and turn the wedding suit into something truly unforgettable.",
              Una: "Una Germany stands for high-quality accessories “Made in Germany” – with love for detail, sustainable materials and perfect workmanship. I value the vast selection of ties, bow ties, waistcoats and much more that adds the perfect accent to every occasion. What excites me most is how naturally tradition, quality and modern style come together here.",
              Olymp:
                "Olymp is the market leader in business shirts and impresses with top-level quality and perfect fit. In our formalwear department we especially appreciate the elegant gala shirts – from the slim Level 5 line to the extra-slim No. 6. Thanks to our strong selection, we can offer many customers exactly the shirt that not only fits perfectly but also rounds off their special look in style.",
              Eterna:
                "Eterna is a traditional shirt manufacturer from Passau, producing since 1863 and still manufacturing in Europe today. ETERNA particularly convinces with its opaque fabrics, which offer absolute security especially for festive occasions and under light suits. We offer gala shirts in various fits – Slim Fit, Modern Fit and Comfort Fit – meaning that every man, from slim groom to very tall or stronger figures, can find the perfect fit. ETERNA combines premium fabrics, excellent cuts and fair European production – a real asset to our formalwear department.",
              Lindenmann:
                "Lindenmann accessories are the finishing touch to every formal outfit – giving it personality and style. With high-quality cufflinks, elegant belts and classic suspenders from Lindenmann, we create exactly the accents that complete and elevate a look. This is how a good suit becomes a perfect appearance.",
              Abrazi:
                "We carry exclusive cufflinks and other accessories from Abrazi – handcrafted and refined with colored leather or fine wood inlays. These premium details add stylish accents and complete every formal outfit with character and class.",
              Lloyd:
                "Lloyd shoes stand for elegant design, top-quality craftsmanship and outstanding comfort – exactly what we value in our formalwear department. Whether classic-elegant or modern, they round off every outfit perfectly and give both grooms and guests the confidence to appear stylish and comfortable all day long.",
              "Digel Schuhe":
                "Digel shoes are the perfect complement to the brand’s formal suits. They combine elegant design with high wearing comfort, ensuring that grooms, best men and guests are dressed stylishly and harmoniously from head to toe. The result is a complete look that radiates both elegance and confidence.",
            },
            fotoshootings: {
              organisation: "Organized by",
              brautmode: "Bridal fashion by",
              fotografie: "Photography",
            },
            reviews: {
              reviewLinkText: "To the review",
              review1:
                "I bought my wedding suit here and am absolutely thrilled! The advice was friendly, professional and very attentive. They take their time, listen to your wishes and make sure you leave truly satisfied. For future celebrations, I will definitely come back here.",
              review2:
                "Today I bought a suit at Herrenhaus Fischer and I am absolutely delighted – both with the suit itself and the service. You can feel the love for detail and the passion for classic menswear the moment you walk in. The atmosphere is stylish and welcoming. What I especially want to highlight is the highly competent and individual consultation. A lot of time was taken to understand my wishes and ideas. The advice was not only expert, but also extremely friendly and pleasant – you really feel valued as a customer. In the end, I found a perfectly fitting suit that suits my taste exactly. I can wholeheartedly recommend Herrenhaus Fischer to anyone who values quality, style and excellent service.",
            },
          },
          männermode: {
            text1:
              "Menswear for every day – with style, attitude and character. Menswear is more than clothing – it is an expression of personality. At Herrenhaus Fischer, men will find outfits that reflect exactly that: authentic, modern and always with that certain something. Whether at the office, on the go or over an after-work drink – our looks accompany you through the day.",
            text2:
              "Brands like Eterna, Marvelis and Cinque stand for elegant business fashion that combines comfort and class.",
            text3:
              "For those who prefer a more relaxed style, New Zealand Auckland or Replay offer casual leisure looks full of character – sporty, rugged and stylish at the same time.",
            text4:
              "And with Alberto, you experience trousers that allow movement without losing shape or style.",
            text5:
              "From fine shirts to cool outdoor jackets – we help you find looks that suit your everyday life and underline your personality. Discover fashion that doesn’t disguise you – but accompanies you. Every day.",
          },
          schützenfest: {
            text1:
              "Everything for the Schützen – because style matters when celebrating too. When the drums roll again in Brakel and the beer is chilled, we know: it’s Schützenzeit! And at Herrenhaus Fischer, all schützen, captains and flag bearers will find everything they need for a perfectly celebrated festival. Our white shirts are available in four fits – comfort fit, modern fit, body fit and extra slim fit – so everyone from the seasoned club chairman to the young rifleman looks great. Long sleeve or short sleeve? Depending on weather and beer mood. We also offer uniform trousers in black or white – naturally in all sizes, as it should be. For the finishing touch we have Schützen ties with shooting medals or the Brakel crest, white gloves, classic black Schützen caps and – on order – uniform jackets, hats and accessories. Our tip: come early, try things on and then enjoy the celebrations stress-free. Because those who shop early only have one worry left at the festival: that the beer doesn’t run out.",
            text2:
              "Bernhard Fischer with his wife Diana – King of the Schützen Brotherhood St. Georg e.V. Riesel 2023/24 and District King in the Höxter District Association of the Historical German Schützen Brotherhoods.",
          },
          kontakt: {
            title1: "Store Opening Hours",
            hour1v1: "Monday to Friday from 10:00 to 13:00 and 15:00 to 18:00",
            hour1v2: "Saturday from 10:00 to 14:00",
            title2: "Consultation by Appointment",
            hour2: "Monday to Saturday from 8:00 to 21:00",
            label: {
              email: "Email",
              name: "Name",
              firma: "Company",
              nachricht: "Message",
            },
            placeholder: {
              email: "Your email address",
              name: "Your name",
              firma: "Your company",
              nachricht: "Your message",
            },
            errorMessageEmail: "Please enter a valid email address.",
            errorMessageRecaptcha:
              "Please first confirm that you are not a robot.",
            errorTitle: "Something went wrong...",
            errorDescription:
              "Please email us directly or simply give us a call.",
            sendButton: "Send",
          },
          empfehlungen: {
            brautmode: "Bridal Fashion",
            fotografie: "Photography",
            dekoration: "Decoration",
            Spaß: "Entertainment",
          },
          footer: {
            design: "Design by ",
          },
          time: {
            year: "Year",
            month: "Month",
            day: "Day",
            today: "Today",
            plural: "s",
            may: "May",
            september: "September",
            december: "December",
          },
          routes: {
            Start: "Start",
            "Festliche Herrenmode": "Formal Menswear",
            Männermode: "Menswear",
            Termine: "Appointments",
            "Klara Fischer": "Klara Fischer",
            Schützenfest: "Schützenfest",
            Kontakt: "Contact & Opening Hours",
            Empfehlungen: "Recommendations",
          },
        },
      },

      fr: {
        translation: {
          start: {
            intro:
              "Herrenhaus Fischer a été fondé en 1998 par Bernhard et Diana Fischer à Brakel et incarne depuis lors la mode masculine haut de gamme – du jean au manteau, de la chemise au costume de cérémonie. Avec une véritable passion pour la qualité, la coupe et le conseil personnalisé, la maison est devenue un spécialiste de référence pour la mode du marié. Aujourd’hui, des clients venant d’une vaste région entre Dortmund, Hanovre, Cassel et au-delà font confiance au savoir-faire et au service de Herrenhaus Fischer.",
          },
          festlich: {
            intro1: "Chers amis de l’élégance, du style et de la mode,",
            intro2:
              "depuis 1998, je suis l’habilleur du marié et de ses invités. Les attentes croissantes en matière d’individualité, de classe et de durabilité représentent un vrai défi. Et c’est justement pour cela que j’éprouve une immense joie à accompagner mes clients sur un petit bout du chemin vers « leur jour le plus important ». J’ai hâte de vous rencontrer !",
            gruß: "Affectueusement",
            accordion: {
              "1": "Pour le marié et ses invités",
              "2": "Nos marques",
              "3": "Séances photo",
              "4": "Témoignages de nos clients",
            },
            buttons: {
              "1": {
                title: "Pour le Marié",
                texts: {
                  text1:
                    "Le costume de mariage doit être vraiment exceptionnel. Avec la mariée, le marié est au centre de l’attention – aussi visuellement. Nous y parvenons grâce à des styles originaux, à des éléments traditionnels ou militaires et à des inspirations issues d’époques révolues. L’imagination n’a presque pas de limites ici, et nous réalisons volontiers des tenues sur mesure.",
                  title2: "Vintage ? Bohème ? Rétro ?",
                  text2:
                    "Les mariages sont aujourd’hui souvent célébrés autour d’un thème précis. Le glamour des « Années folles », le style cool des « Sixties », l’élégance classique ou encore l’ambiance détendue d’une fête à la grange – tout cela représente un défi pour la tenue du couple. Quel que soit le thème choisi, nous proposons des looks adaptés.",
                  title3: "Classiques",
                  text3:
                    "Queue-de-pie, jaquette, smoking & co trouvent toujours leurs amateurs. Le costume de mariage traditionnel des milieux aristocratiques, en Angleterre ou dans les films hollywoodiens, reste la jaquette grise avec pantalon rayé (Stresemann). Aujourd’hui, le smoking moderne s’est imposé comme alternative très populaire : élégant, contemporain et extrêmement polyvalent.",
                  title4: "Coûts ?",
                  text4:
                    "En moyenne, un marié dépense environ 1 250 € pour une tenue complète. Une belle tenue a un prix. Mais nous sommes convaincus que nous pouvons proposer une solution adaptée à presque tous les budgets. Nos « menus » servent de repère afin que vous puissiez planifier sereinement votre budget :",
                  price1: "Bien et abordable.",
                  priceText1:
                    "Une tenue complète pourrait par exemple comprendre : costume élégant, chemise ville stylée, cravate – le tout à partir de 400 €",
                  price2: "Élégant et accessible.",
                  priceText2:
                    "Costume de cérémonie, chemise gala et nœud papillon avec pochette à partir de 600 €",
                  price3: "Haut de gamme complet.",
                  priceText3:
                    "Costume de cérémonie avec gilet ornemental, lavallière ou nœud papillon et pochette assortie, chemise gala, boutons de manchette – à partir de 900 €",
                  price4: "Spectaculairement premium.",
                  priceText4:
                    "Costume original avec éléments particuliers, gilet assorti et accessoires, chemise gala, boutons de manchette, éventuellement sur mesure – environ 1 200 €",
                  title5: "Extras ?",
                  text5:
                    "Le prix du costume seul n’est donc pas déterminant. Pensez aussi aux accessoires. Besoin de chaussures élégantes ? Entre 120 € et 200 €. Ceinture ou bretelles ? Entre 30 € et 100 €. Nos boutons de manchette coûtent entre 39,95 € et 59,95 €. Les débardeurs évitent les démarcations visibles sous une chemise claire – nous recommandons notre modèle à 19,95 € en blanc ou chair. Les retouches dépendent du travail nécessaire : nous communiquons toujours un prix fixe à l’avance. Une pièce sur mesure ne coûte généralement pas plus cher qu’un vêtement fini – sauf en cas d’urgence ou de confection très spécifique.",
                },
              },
              "2": {
                title: "Le Témoin",
                texts: {
                  title1: "Styles",
                  text1:
                    "Bien sûr, le témoin se vêtira lui aussi élégamment – mais toujours un peu plus sobrement que le marié. Il n’existe ici aucune norme sociale stricte. Cependant, le couple peut exprimer certains souhaits.",
                  title2: "« Best man – et ça se voit ! »",
                  text2:
                    "Une tendance très appréciée consiste à harmoniser subtilement les accessoires du témoin avec la tenue du marié. Ainsi, le témoin peut exprimer son lien avec le marié, par exemple en portant un nœud papillon et des bretelles réalisés dans le même tissu que le gilet et la lavallière du marié.",
                },
              },
              "3": {
                title: "Invités et Famille",
                texts: {
                  title1: "En harmonie avec l’événement !",
                  text1:
                    "La mode de cérémonie porte bien son nom : elle doit convenir à l’occasion. Dans notre société moderne, la tenue formelle n’est plus systématique. Les vêtements comptent toujours, mais ils ne sont plus indispensables pour réussir professionnellement. Nous avons donc tendance à nous habiller plus décontracté. Chacun définit lui-même ce qui lui paraît approprié – mais il est bon de garder à l’esprit que le couple met énormément d’énergie dans cette journée et espère souvent que les invités s’habilleront en conséquence.",
                  title2: "Décontracté mais chic ?",
                  text2:
                    "Il n’est pas toujours nécessaire de porter une tenue très formelle. Un pantalon chino élégant et un joli haut peuvent également faire très bonne impression. En cas de doute, mieux vaut demander s’il existe un dress code.",
                },
              },
              "4": {
                title: "Conseils pour le Marié",
                texts: {
                  text1:
                    "Choisir la tenue du « plus beau jour de votre vie » doit être un plaisir – pas une source de stress !",
                  tipp1:
                    "Commencez suffisamment tôt, surtout en cas de confection sur mesure. Cela peut prendre 6 à 16 semaines. Pour avoir toutes les options, nous recommandons un rendez-vous environ 6 mois avant le mariage.",
                  tipp2:
                    "Un rendez-vous est indispensable. Certaines questions peuvent déjà être clarifiées par téléphone.",
                  tipp3: "Fixez un budget – et parlez-en ouvertement.",
                  tipp4:
                    "Ne laissez pas trop d’influences extérieures vous dicter vos choix. Les souhaits de la mariée sont importants – mais vous devez avant tout vous sentir bien dans votre tenue.",
                  tipp5:
                    "Les salons du mariage et Internet peuvent inspirer. Mais magazines et sites ne montrent qu’une partie de la réalité. Essayez différentes coupes pour voir ce qui vous va vraiment.",
                  tipp6:
                    "Les salons du mariage et Internet peuvent inspirer. Mais magazines et sites ne montrent qu’une partie de la réalité. Essayez différentes coupes pour voir ce qui vous va vraiment.",
                  tipp7:
                    "Venez accompagné si vous le souhaitez – parents, mariée, amis – mais trop d’avis peuvent aussi troubler. (Évitez si possible de venir avec la mère et la belle-mère en même temps – sauf si elles sont meilleures amies…)",
                  tipp8:
                    "Quel est le style de la robe ? Blanche ou ivoire ? La mariée peut aussi envoyer une photo – cela nous aide à conseiller encore plus précisément.",
                },
              },
            },
            markenTexte: {
              Wilvorst:
                "Wilvorst incarne plus de 100 ans d’expertise dans la mode masculine élégante et est leader du marché des costumes de mariage et de cérémonie. L’alliance de tissus nobles, de coupes parfaites et d’un vaste choix de styles modernes comme classiques séduit sans cesse. Chaque pièce est un concentré d’élégance, de savoir-faire et de qualité – idéal pour les grandes occasions.",
              "Roberto Vicentti":
                "Roberto Vicentti séduit par des créations uniques qui placent le marié au centre de l’attention avec style. Les tenues associent lignes élégantes et détails raffinés – un mariage parfait entre artisanat portugais et design contemporain pour un moment inoubliable.",
              "Kastell Wedding":
                "Kastell Wedding associe élégance traditionnelle, confection haut de gamme et touches modernes. Le résultat : des tenues intemporelles qui allient style, qualité et identité mode affirmée. Chaque marié y trouve un look qui rend sa journée unique.",
              Digel:
                "Digel impressionne par une collection très large – des costumes stretch confortables aux looks business élégants en passant par des tenues de cérémonie. Ce que j’apprécie particulièrement : sa polyvalence. Qu’il s’agisse du marié, du témoin, du frère plus jeune ou d’un homme à la carrure plus forte – Digel propose une solution adaptée à chacun. Design moderne, confort remarquable et coupe impeccable font de Digel une valeur sûre.",
              Tziacco:
                "Tziacco symbolise des tenues à l’allure princière – individuelles, uniques et pleines de prestance. Les hommes adorent ces styles d’exception que l’on ne voit pas partout et qui incarnent l’élégance pure. Grâce à notre sélection étendue et aux possibilités de confection sur mesure, presque tous les souhaits peuvent être réalisés.",
              Una: "Una Germany représente des accessoires haut de gamme « Made in Germany » – réalisés avec soin, matériaux durables et finitions parfaites. L’immense choix de cravates, nœuds papillon, gilets et bien plus encore permet de trouver l’accent idéal pour chaque occasion.",
              Olymp:
                "Olymp est leader du marché des chemises business et convainc par une qualité exceptionnelle et une coupe parfaite. Dans notre rayon cérémonie, nous apprécions particulièrement les chemises gala – de la ligne Slim Level 5 à la très cintrée No.6. Nous trouvons ainsi à chaque client la chemise qui lui va parfaitement et sublime sa tenue.",
              Eterna:
                "Eterna, maison historique fondée à Passau en 1863, produit encore aujourd’hui en Europe. Ses tissus opaques sont particulièrement appréciés pour les occasions festives et sous les costumes clairs. Nous proposons des chemises gala en Slim Fit, Modern Fit et Comfort Fit – afin que chaque homme trouve la coupe idéale. Qualité textile, patronage impeccable et production européenne équitable – un vrai atout pour notre rayon cérémonie.",
              Lindenmann:
                "Les accessoires Lindenmann sont la touche finale de chaque tenue de cérémonie – ils lui donnent personnalité et élégance. Boutons de manchette raffinés, ceintures élégantes, bretelles classiques : autant de détails qui transforment un beau costume en une allure parfaite.",
              Abrazi:
                "Nous proposons des boutons de manchette et accessoires exclusifs signés Abrazi – fabriqués à la main et agrémentés d’inserts en cuir coloré ou bois noble. Ces détails précieux apportent caractère et distinction à chaque tenue.",
              Lloyd:
                "Les chaussures Lloyd allient design élégant, qualité supérieure et confort remarquable – exactement ce que nous recherchons pour les grandes occasions. Classiques ou modernes, elles complètent chaque tenue à la perfection.",
              "Digel Schuhe":
                "Les chaussures Digel complètent idéalement les costumes de la marque. Design raffiné et confort élevé garantissent une élégance harmonieuse – de la tête aux pieds.",
            },
            fotoshootings: {
              organisation: "Organisation par",
              brautmode: "Robe de mariée par",
              fotografie: "Photographie",
            },
            reviews: {
              reviewLinkText: "Lire l’avis",
              review1:
                "J’y ai acheté mon costume de mariage et j’en suis absolument ravi ! Le conseil était chaleureux, professionnel et très attentif. On prend vraiment le temps de vous accompagner et de répondre à vos attentes. J’y reviendrai sans hésiter pour de futures occasions.",
              review2:
                "Aujourd’hui, j’ai acheté un costume chez Herrenhaus Fischer et je suis absolument conquis – autant par le costume que par le service. Dès l’entrée, on ressent la passion pour la mode masculine classique et le souci du détail. L’ambiance est élégante et accueillante. La qualité du conseil est remarquable : personnalisée, compétente et extrêmement agréable. Au final, j’ai trouvé un costume parfaitement ajusté et totalement à mon goût. Je recommande vivement Herrenhaus Fischer à tous ceux qui apprécient la qualité, le style et un service irréprochable.",
            },
          },
          männermode: {
            text1:
              "Mode masculine pour chaque jour – avec style, attitude et caractère. La mode masculine est bien plus que des vêtements : c’est l’expression de la personnalité. Chez Herrenhaus Fischer, les hommes trouvent des tenues authentiques, modernes et toujours dotées de ce petit plus. Que ce soit au bureau, en déplacement ou en after-work – nos looks vous accompagnent au quotidien.",
            text2:
              "Des marques comme Eterna, Marvelis et Cinque incarnent une mode business élégante alliant confort et classe.",
            text3:
              "Pour un style plus décontracté, New Zealand Auckland et Replay proposent des looks loisirs pleins de caractère – sportifs, robustes et stylés à la fois.",
            text4:
              "Avec Alberto, vous découvrez des pantalons qui offrent une grande liberté de mouvement sans sacrifier la forme ni le style.",
            text5:
              "De la chemise raffinée à la veste outdoor tendance – nous vous aidons à trouver des tenues adaptées à votre quotidien et fidèles à votre personnalité. Découvrez une mode qui ne vous déguise pas – mais vous accompagne. Jour après jour.",
          },
          schützenfest: {
            text1:
              "Tout pour le Schütze – car le style compte aussi lors des fêtes. Lorsque les tambours résonnent à Brakel et que la bière est fraîche, nous savons : c’est la Schützenzeit ! Et chez Herrenhaus Fischer, tous les Schützen, capitaines et porte-drapeaux trouvent tout ce qu’il leur faut pour une fête réussie. Nos chemises blanches existent en quatre coupes – comfort fit, modern fit, body fit et extra slim fit – pour que chacun soit élégant, du président de club au jeune Schütze. Manches longues ou courtes ? Selon la météo… et l’ambiance ! Nous proposons également des pantalons d’uniforme noirs ou blancs – bien sûr dans toutes les tailles. Les derniers détails : cravates Schützen avec insigne d’honneur ou blason de Brakel, gants blancs, casquettes traditionnelles – et sur commande, vestes, chapeaux et accessoires. Notre conseil : venez essayer tôt pour profiter ensuite de la fête en toute sérénité. La seule inquiétude restante ? Que la bière ne manque pas.",
            text2:
              "Bernhard Fischer, avec son épouse Diana – Roi de la Schützenbruderschaft St. Georg e.V. Riesel 2023/24 et Roi de District au sein du Bezirksverband Höxter der Historischen Deutschen Schützenbruderschaften.",
          },
          kontakt: {
            title1: "Heures d’ouverture",
            hour1v1:
              "Du lundi au vendredi de 10h00 à 13h00 et de 15h00 à 18h00",
            hour1v2: "Le samedi de 10h00 à 14h00",
            title2: "Conseil sur rendez-vous",
            hour2: "Du lundi au samedi de 8h00 à 21h00",
            label: {
              email: "Email",
              name: "Nom",
              firma: "Entreprise",
              nachricht: "Message",
            },
            placeholder: {
              email: "Votre adresse email",
              name: "Votre nom",
              firma: "Votre entreprise",
              nachricht: "Votre message",
            },
            errorMessageEmail: "Veuillez saisir une adresse email valide.",
            errorMessageRecaptcha:
              "Veuillez d’abord confirmer que vous n’êtes pas un robot.",
            errorTitle: "Une erreur s’est produite...",
            errorDescription:
              "Merci de nous écrire directement ou de nous appeler.",
            sendButton: "Envoyer",
          },
          empfehlungen: {
            brautmode: "Robe de mariée",
            fotografie: "Photographie",
            dekoration: "Décoration",
            Spaß: "Divertissement & technique événementielle",
          },
          footer: {
            design: "Design par ",
          },
          time: {
            year: "Année",
            month: "Mois",
            day: "Jour",
            today: "Aujourd’hui",
            plural: "s",
            may: "Mai",
            september: "Septembre",
            december: "Décembre",
          },
          routes: {
            Start: "Accueil",
            "Festliche Herrenmode": "Mode de cérémonie",
            Männermode: "Mode masculine",
            Termine: "Rendez-vous",
            "Klara Fischer": "Klara Fischer",
            Schützenfest: "Schützenfest",
            Kontakt: "Contact & Horaires",
            Empfehlungen: "Recommandations",
          },
        },
      },

      es: {
        translation: {
          start: {
            intro:
              "Herrenhaus Fischer fue fundado en 1998 por Bernhard y Diana Fischer en Brakel y desde entonces representa moda masculina de alta calidad: desde vaqueros hasta abrigos, desde camisas hasta trajes de ceremonia. Con pasión por la calidad, el ajuste y el asesoramiento personal, la casa se ha convertido en un especialista líder en moda para el novio. Hoy en día, clientes de una amplia región entre Dortmund, Hanóver, Kassel y más allá confían en la competencia y el servicio de Herrenhaus Fischer.",
          },
          festlich: {
            intro1:
              "Queridos amigos y amigas de la celebración, el estilo y la moda,",
            intro2:
              "desde 1998 soy el proveedor de moda masculina para el novio y sus invitados. Los deseos cada vez mayores de individualidad, clase y sostenibilidad suponen todo un reto. Precisamente por eso me alegra aún más acompañar a los clientes un pequeño tramo del camino hacia “su día más importante”. ¡Tengo muchas ganas de recibiros!",
            gruß: "Con todo cariño",
            accordion: {
              "1": "Para el novio y sus invitados",
              "2": "Nuestras marcas",
              "3": "Sesiones de fotos",
              "4": "De nuestros clientes",
            },
            buttons: {
              "1": {
                title: "Para el novio",
                texts: {
                  text1:
                    "El traje de la boda debe ser algo realmente especial. Junto con la novia, el novio está también visualmente en el centro de atención. Lo conseguimos con estilos llamativos, con elementos tradicionales o de inspiración militar y con guiños a estilos de moda de épocas ya pasadas. Aquí la imaginación casi no tiene límites y con gusto confeccionamos también conjuntos individuales.",
                  title2: "¿Vintage? ¿Boho? ¿Retro?",
                  text2:
                    "Hoy en día las bodas suelen celebrarse bajo ciertos lemas. El estilo glamuroso de los “años veinte dorados”, el aire fresco de los “sixties”, el estilo clásico o la fiesta desenfadada en un granero suponen, por supuesto, un reto también para el conjunto de los novios. Sea cual sea el lema, ofrecemos distintos outfits acordes a cada temática.",
                  title3: "Clásicos",
                  text3:
                    "Frac, chaqué, esmoquin y compañía siguen encontrando siempre nuevos admiradores. El traje de boda clásico en la aristocracia, en Inglaterra y en las superproducciones de Hollywood es sin duda el chaqué gris con pantalón de raya diplomática (Stresemann). Como alternativa hoy mucho más popular se ha impuesto el esmoquin joven, que resulta a la vez elegante y moderno y destaca por su gran versatilidad.",
                  title4: "¿Costes?",
                  text4:
                    "De media, un novio invierte unos 1.250,- € en un conjunto completo. Los conjuntos bonitos tienen su precio. Sin embargo, estamos convencidos de que podemos encontrar el outfit adecuado para la mayoría de los bolsillos. Nuestros “menús” sirven aquí como referencia para que pueda planificar su presupuesto:",
                  price1: "Bueno y económico.",
                  priceText1:
                    "Un conjunto completo podría ser, por ejemplo: traje elegante, camisa de ciudad con estilo, corbata – completo desde 400,- €",
                  price2: "Elegante y asequible.",
                  priceText2:
                    "Traje de ceremonia, camisa de gala y pajarita con pañuelo decorativo desde 600,- €",
                  price3: "De calidad, completo.",
                  priceText3:
                    "Traje de ceremonia con chaleco de fantasía, plastrón o pajarita y pañuelo decorativo, camisa de gala, gemelos, todo junto desde 900,- €",
                  price4: "Espectacularmente exclusivo.",
                  priceText4:
                    "Traje llamativo con elementos especiales, chaleco y accesorios a juego, camisa de gala, gemelos, eventualmente confeccionados de forma individual, cuesta en total aproximadamente 1200,- €",
                  title5: "¿Extras?",
                  text5:
                    "Así que el precio del traje por sí solo no es decisivo. Piense también en las pequeñas piezas que quizá todavía falten. ¿Necesita zapatos elegantes? Desde 120,- € hasta 200,- €. No se olvide del cinturón o los tirantes, desde 30,- € hasta 100,- €. Los gemelos cuestan con nosotros entre 39,95 € y 59,95 € y están disponibles en distintos estilos. Con camiseta interior o T-shirt a menudo se ven bordes poco favorecedores bajo la camisa clara. Recomendamos la camiseta de tirantes por 19,95 € en blanco o color piel. El precio del servicio de arreglos suele depender del trabajo realizado. Le indicamos los costes de antemano y luego estos son fijos. Una confección individual generalmente no cuesta más que una prenda ya terminada. Solo se encarece si falta tiempo o se trata de una confección especial a medida.",
                },
              },
              "2": {
                title: "El testigo del novio",
                texts: {
                  title1: "Estilos",
                  text1:
                    "Por supuesto, el testigo del novio también se vestirá de forma elegante, aunque siempre algo más discreta que el propio novio. No existe aquí una expectativa social especial. Sin embargo, es posible que la pareja exprese ciertos deseos.",
                  title2: "“Best man”… ¡y se nota!",
                  text2:
                    "Una tendencia muy apreciada en los testigos se ve en el diseño discreto de los accesorios, que se coordinan a la perfección con el outfit del novio. Así, el testigo puede mostrar su vínculo, por ejemplo, llevando una pajarita con tirantes combinados en el mismo diseño que el chaleco con plastrón del novio.",
                },
              },
              "3": {
                title: "Invitados y familia de los novios",
                texts: {
                  title1: "¡A la altura de la ocasión!",
                  text1:
                    "La ropa de ceremonia se llama así porque debe corresponder a una ocasión determinada. En nuestra sociedad libre, llevar ropa formal ya no es el estándar. La ropa sigue “haciendo al hombre”, pero en muchas profesiones ya no es un requisito para las oportunidades de ascenso. Por eso solemos ir más bien casuales. Lo que significa “adecuado a la ocasión” lo determina cada uno para sí. Como mínimo deberíamos cuestionarnos a nosotros mismos y tener en cuenta que la pareja pone mucho empeño en diseñar su día importante y probablemente desea que los invitados también se vistan en consonancia.",
                  title2: "¿Informal y aun así elegante?",
                  text2:
                    "Tampoco tiene por qué ser siempre la ropa de ceremonia formal. Como invitado también puedo causar una buena impresión con un pantalón chino más deportivo y una parte de arriba cuidada. En caso de duda, merece la pena preguntar si hay que respetar algún código de vestimenta.",
                },
              },
              "4": {
                title: "Consejos para el novio",
                texts: {
                  text1:
                    "Escoger el outfit para el “día más bonito de la vida” debería ser un placer y no una fuente de estrés.",
                  tipp1:
                    "Empiece con tiempo, por si es necesaria una confección. Esta tarda aprox. de 6 a 16 semanas. Para poder aprovechar todas las posibilidades, recomendamos pedir cita unos 6 meses antes de la boda.",
                  tipp2:
                    "Pedir cita es absolutamente necesario. De este modo también se pueden aclarar por teléfono algunas cuestiones de antemano.",
                  tipp3: "Pensad en un presupuesto y hablad de ello.",
                  tipp4:
                    "No dejéis que os impongan demasiadas condiciones. Por supuesto, los deseos de la novia son importantes, pero en primer lugar también vosotros tenéis que sentiros a gusto.",
                  tipp5:
                    "En ferias de boda o en internet ya se puede empezar a tratar un poco el tema del traje de novio. Folletos, revistas y páginas web solo muestran la mitad de la verdad. Pruebe diferentes estilos sobre usted mismo para estar seguro de cuál es el adecuado.",
                  tipp6:
                    "En ferias de boda o en internet ya se puede empezar a tratar un poco el tema del traje de novio. Folletos, revistas y páginas web solo muestran la mitad de la verdad. Pruebe diferentes estilos sobre usted mismo para estar seguro de cuál es el adecuado.",
                  tipp7:
                    "Traiga con gusto asesores a la cita, por ejemplo padres, la novia o amigos, pero tenga en cuenta que demasiados asesores también pueden causar inseguridad. (A ser posible no traiga a la madre y a la suegra como asesoras al mismo tiempo, a no ser que sean mejores amigas…)",
                  tipp8:
                    "¿Qué estilo tiene el vestido de novia? ¿Es blanco o color marfil? La novia puede enviarnos una foto de su vestido. Así podremos asesorar de forma más precisa en los detalles.",
                },
              },
            },
            markenTexte: {
              Wilvorst:
                "Wilvorst representa más de 100 años de experiencia en moda masculina elegante y es líder del mercado en trajes de boda y de fiesta. La combinación de tejidos nobles, un ajuste perfecto y una gran variedad de estilos tanto modernos como clásicos entusiasma una y otra vez. Cada prenda aúna artesanía, elegancia y calidad: ideal para una aparición especial.",
              "Roberto Vicentti":
                "Roberto Vicentti entusiasma con diseños extraordinarios que sitúan al novio de manera elegante en el centro de todas las miradas. Los outfits combinan líneas elegantes con detalles especiales y hacen que cada aparición sea única. La artesanía portuguesa se une aquí a un diseño moderno: para un momento de boda inolvidable.",
              "Kastell Wedding":
                "Kastell Wedding combina la elegancia tradicional y la confección de alta calidad con toques modernos. Así surgen outfits atemporales que unen estilo, calidad y una declaración de moda clara. Cada novio encuentra aquí un look que hace inolvidable su día especial.",
              Digel:
                "Digel entusiasma por su enorme gama: desde trajes deportivos y cómodos con elasticidad hasta looks de negocios elegantes y outfits de ceremonia para la gran aparición. Aprecio especialmente la versatilidad: ya sea el novio, el testigo, el hermano menor o un hombre con una figura más robusta, Digel ofrece el outfit adecuado para cada tipo y cada situación. La combinación de diseño moderno, gran comodidad de uso y excelente ajuste convierte a Digel en una marca que simplemente convence siempre.",
              Tziacco:
                "Tziacco representa outfits de aire real que envuelven a cada novio en un look extraordinario: individual, único y lleno de carisma. A los hombres les encantan estos estilos especiales que no se encuentran en cualquier sitio y que representan pura elegancia. Con nuestra amplia selección y la posibilidad de confecciones a medida, cumplimos prácticamente cualquier deseo y convertimos el traje de boda en algo verdaderamente inolvidable.",
              Una: "Una Germany representa accesorios de alta calidad “Made in Germany”, con amor por los detalles, materiales sostenibles y una confección perfecta. Aprecio la enorme selección de corbatas, pajaritas, chalecos y mucho más, que aportan el acento adecuado para cada ocasión. Me entusiasma especialmente que tradición, calidad y estilos modernos vayan aquí tan de la mano de forma natural.",
              Olymp:
                "Olymp es líder del mercado en el segmento de camisas de ciudad y convence por su máxima calidad y ajuste perfecto. En nuestra sección de ceremonia apreciamos especialmente las elegantes camisas de gala, desde la línea entallada Level 5 hasta las extremadamente ajustadas No.6. Gracias a nuestra amplia oferta podemos ofrecer a muchos clientes exactamente la camisa que no solo sienta de maravilla, sino que remata con estilo su gran aparición.",
              Eterna:
                "Eterna es un fabricante de camisas tradicional de Passau que desde 1863 representa calidad e innovación y que todavía produce hoy en Europa. ETERNA convence especialmente por sus tejidos opacos, que en eventos de ceremonia y bajo trajes claros proporcionan total seguridad. Disponemos de camisas de gala en distintos cortes – Slim Fit, Modern Fit y Comfort Fit – de modo que desde el novio delgado hasta el hombre muy alto o más fuerte cada uno encuentra el ajuste perfecto. ETERNA combina tejidos de alta calidad, cortes excelentes y una producción justa en Europa: una auténtica ganancia para nuestra sección de ceremonia.",
              Lindenmann:
                "Los accesorios Lindenmann son el toque final de cualquier outfit de ceremonia: aportan personalidad y estilo al look. Con gemelos de alta calidad, elegantes cinturones y tirantes clásicos de Lindenmann marcamos exactamente los acentos que convierten un conjunto en algo completo y especial. Así, de un buen traje surge una aparición perfecta.",
              Abrazi:
                "Ofrecemos gemelos exclusivos y otros accesorios de Abrazi, hechos a mano y refinados con incrustaciones de cuero de color o madera noble. Estos valiosos detalles aportan acentos elegantes y completan cualquier outfit de ceremonia con carácter y clase.",
              Lloyd:
                "Los zapatos Lloyd representan un diseño refinado, la máxima calidad y una comodidad de uso sobresaliente: exactamente lo que apreciamos en nuestra sección de ceremonia. Ya sean clásicos y elegantes o modernos, completan cualquier outfit a la perfección y dan al novio y a los invitados la seguridad de ir elegantes y cómodos durante todo el día.",
              "Digel Schuhe":
                "Los zapatos Digel son el complemento perfecto para los trajes de ceremonia de la marca. Combinan un diseño elegante con un alto confort y garantizan que el novio, los testigos y los invitados vayan vestidos con estilo y en armonía de pies a cabeza. Así se crea una imagen global que irradia a la vez elegancia y seguridad.",
            },
            fotoshootings: {
              organisation: "Organización a cargo de",
              brautmode: "Moda nupcial de",
              fotografie: "Fotografía",
            },
            reviews: {
              reviewLinkText: "Ir a la reseña",
              review1:
                "Compré aquí mi traje de boda y estoy absolutamente encantado. El asesoramiento fue amable, profesional y muy atento. Se toman su tiempo, tienen en cuenta los deseos y se aseguran de que al final uno se vaya realmente satisfecho a casa. Para futuras celebraciones, sin duda volveré aquí.",
              review2:
                "Hoy he comprado un traje en Herrenhaus Fischer y estoy absolutamente entusiasmado, tanto con el propio traje como con el asesoramiento. Ya al entrar en la tienda se percibe el amor por el detalle y la pasión por la moda clásica masculina. El ambiente es elegante y acogedor. Quiero destacar especialmente el asesoramiento extremadamente competente e individual. Se dedicó mucho tiempo a mis deseos e ideas. El asesoramiento no solo fue excelente desde el punto de vista profesional, sino también muy cordial y agradable: uno se siente realmente valorado como cliente. Al final encontré un traje que encaja perfectamente y que corresponde exactamente a mis gustos. Puedo recomendar Herrenhaus Fischer sin reservas a todos los que valoran la calidad, el estilo y un servicio excelente.",
            },
          },
          männermode: {
            text1:
              "Moda masculina para cada día – con estilo, personalidad y carácter. La moda masculina es más que ropa: es expresión de la propia personalidad. En Herrenhaus Fischer los hombres encuentran outfits que reflejan exactamente eso: auténticos, modernos y siempre con un toque especial. Ya sea en la oficina, de camino o tomando algo al final del día, nuestros looks le acompañan durante toda la jornada.",
            text2:
              "Marcas como Eterna, Marvelis y Cinque representan moda de negocios elegante que combina comodidad y clase.",
            text3:
              "Para quienes prefieren un estilo más desenfadado, New Zealand Auckland o Replay ofrecen looks de ocio relajados y con carácter: deportivos, robustos y con estilo al mismo tiempo.",
            text4:
              "Y con Alberto descubrirá pantalones que permiten moverse con libertad sin perder forma ni estilo.",
            text5:
              "Desde la camisa fina hasta la chaqueta outdoor moderna, le ayudamos a encontrar looks que encajan con su día a día y subrayan su personalidad. Descubra una moda que no le disfraza, sino que le acompaña – día tras día.",
          },
          schützenfest: {
            text1:
              "Todo para el Schützen – porque el estilo también cuenta a la hora de celebrar. Cuando en Brakel vuelven a resonar los tambores y la cerveza está fría, sabemos: ¡es tiempo de Schützenfest! Y en Herrenhaus Fischer todos los Schützen, capitanes y portaestandartes encuentran todo lo que necesitan para una fiesta redonda. Nuestras camisas blancas están disponibles en cuatro cortes: comfort fit, modern fit, body fit y extra slim fit, para que desde el veterano presidente de la asociación hasta el joven Schützen todos luzcan bien. ¿Manga larga o corta? Según el tiempo y el ánimo cervecero. Además ofrecemos pantalones de uniforme en negro o blanco, por supuesto en todas las tallas, como debe ser. Para el toque final contamos con corbatas de Schützen con diana de honor o el escudo de Brakel, guantes blancos, las clásicas gorras negras de Schützen y, por encargo, casacas de uniforme, sombreros y accesorios. Nuestro consejo: pasarse con tiempo, probarse todo y luego celebrar sin estrés. Porque quien compra pronto solo tiene una preocupación en la fiesta: que no se acabe la cerveza.",
            text2:
              "Bernhard Fischer con su esposa Diana, rey de la Schützenbruderschaft St. Georg e.V. Riesel 2023/24 y rey de distrito en la asociación de distrito de Höxter de las Historische Deutsche Schützenbruderschaften.",
          },
          kontakt: {
            title1: "Horario de apertura de la tienda",
            hour1v1: "De lunes a viernes de 10:00 a 13:00 y de 15:00 a 18:00",
            hour1v2: "Sábado de 10:00 a 14:00",
            title2: "Asesoramiento con cita previa",
            hour2: "De lunes a sábado de 8:00 a 21:00",
            label: {
              email: "Email",
              name: "Nombre",
              firma: "Empresa",
              nachricht: "Mensaje",
            },
            placeholder: {
              email: "Su dirección de email",
              name: "Su nombre",
              firma: "Su empresa",
              nachricht: "Su mensaje",
            },
            errorMessageEmail:
              "Por favor, introduzca una dirección de email válida.",
            errorMessageRecaptcha:
              "Por favor, confirme primero que no es un robot.",
            errorTitle: "Algo ha salido mal...",
            errorDescription:
              "Por favor, escríbanos directamente un email o llámenos.",
            sendButton: "Enviar",
          },
          empfehlungen: {
            brautmode: "Moda nupcial",
            fotografie: "Fotografía",
            dekoration: "Decoración",
            Spaß: "Diversión y tecnología para eventos",
          },
          footer: {
            design: "Diseño de ",
          },
          time: {
            year: "Año",
            month: "Mes",
            day: "Día",
            today: "Hoy",
            plural: "s",
            may: "Mayo",
            september: "Septiembre",
            december: "Diciembre",
          },
          routes: {
            Start: "Inicio",
            "Festliche Herrenmode": "Moda de ceremonia",
            Männermode: "Moda masculina",
            Termine: "Citas",
            "Klara Fischer": "Klara Fischer",
            Schützenfest: "Schützenfest",
            Kontakt: "Contacto y horario",
            Empfehlungen: "Recomendaciones",
          },
        },
      },
    },
  });

export default i18n;
