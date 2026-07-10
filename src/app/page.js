import Image from "next/image";
import { ChevronRight } from "lucide-react";

const products = [
  {
    id: "mini",
    col: 2,
    badge: null,
    bg: "#E4F5E3",
    name: "Panda Drum",
    tier: "Mini",
    imgSrc: "/image1.png",
    imgSize: 116.75,
    size: "6 Inches",
    notes: "8 Tones",
    bestFor: "Ages 1-5, Toddlers",
    bestForMaxWidth: "103.98px",
    warranty: "1 Year",
  },
  {
    id: "plus",
    col: 3,
    badge: "Best Selling",
    bg: "#EBFDCA",
    name: "Panda Drum",
    tier: "Plus",
    imgSrc: "/image2.png",
    imgSize: 124.23,
    size: "8 Inches",
    notes: "9 Tones",
    bestFor: "All Ages, Beginners",
    bestForMaxWidth: "103.98px",
    warranty: "2 Years",
  },
  {
    id: "pro",
    col: 4,
    badge: "Best Value",
    bg: "#D5F1A5",
    name: "Panda Drum",
    tier: "Pro",
    imgSrc: "/image3.png",
    imgSize: 124.23,
    size: "10 Inches",
    notes: "11 Tones",
    bestFor: "All Ages, Fullest, Richest Sound",
    bestForMaxWidth: "152px",
    warranty: "3 Years",
  },
];

const labels = ["Size", "Number of Notes", "Best for", "Warranty"];

const labelRows = [3, 4, 5, 6];

const gs = "var(--font-general-sans)";
const sw = "var(--font-switzer)";

const semibold = {
  fontFamily: gs,
  fontWeight: 600,
  fontSize: "19.4px",
  lineHeight: "120%",
  letterSpacing: "1%",
  color: "#1A1A1A",
};

const fieldVal = {
  fontFamily: sw,
  fontWeight: 400,
  fontSize: "19.4px",
  lineHeight: "120%",
  letterSpacing: "1%",
  color: "#1A1A1A",
  textAlign: "center",
};

const BORDER = "2.33px solid #1A1A1A";
const RADIUS = "23.28px";
const BADGE_RADIUS = "18.51px 18.51px 0 0";

const SelectButton = () => (
  <button
    style={{
      width: "180.51px",
      height: "52.05px",
      backgroundColor: "#1A1A1A",
      color: "#FFFCF9",
      borderRadius: "16.61px",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: gs,
      fontWeight: 600,
      fontSize: "19.93px",
      lineHeight: "120%",
      letterSpacing: "1%",
      textTransform: "uppercase",
    }}
  >
    Select
  </button>
);

export default function Page() {
  return (
    <main
      style={{
        backgroundColor: "#D5F1A5",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
      }}
    >
      {/* ── DESKTOP TABLE ── */}
      <div
        className="hidden sm:block"
        style={{ overflowX: "auto", width: "100%" }}
      >
        <div
          className="sm:grid"
          style={{
            gridTemplateColumns:
              "minmax(100px, 168.41px) minmax(140px, 225.21px) minmax(140px, 225.21px) minmax(140px, 225.21px)",
            gridTemplateRows: "auto auto auto auto auto auto auto",
            columnGap: 0,
            rowGap: 0,
            minWidth: "520px",
            width: "fit-content",
            margin: "0 auto",
          }}
        >
          {/* ── BACKGROUND BOXES (span rows 2–6, i.e. header through warranty) ── */}
          {products.map((p) => (
            <div
              key={`bg-${p.id}`}
              style={{
                gridRow: "2 / 7",
                gridColumn: p.col,
                backgroundColor: p.bg,
                border: BORDER,
                marginLeft: p.col !== 2 ? "-2.33px" : 0,
                borderTopLeftRadius: p.badge ? 0 : RADIUS,
                borderTopRightRadius: p.badge ? 0 : RADIUS,
                borderBottomLeftRadius: RADIUS,
                borderBottomRightRadius: RADIUS,
                minHeight: "566.45px",
              }}
            />
          ))}

          {/* ── BADGE ROW (row 1) — full column width, no independent radius ── */}
          {products.map(
            (p) =>
              p.badge && (
                <div
                  key={`badge-${p.id}`}
                  style={{
                    gridRow: "1 / 2",
                    gridColumn: p.col,
                    height: "37.92px",
                    backgroundColor: "#1A1A1A",
                    borderRadius: BADGE_RADIUS,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "stretch",
                    justifySelf: "stretch",
                    marginLeft: "-2.33px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: gs,
                      fontWeight: 600,
                      fontSize: "15.52px",
                      lineHeight: "120%",
                      letterSpacing: "1%",
                      color: "#FFFCF9",
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
              ),
          )}

          {/* ── HEADER ROW (row 2) — no button here ── */}
          {products.map((p) => (
            <div
              key={`header-${p.id}`}
              style={{
                gridRow: "2 / 3",
                gridColumn: p.col,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "24px 16px 16px",
                minHeight: "242.88px",
              }}
            >
              <span style={semibold}>{p.name}</span>
              <Image
                src={p.imgSrc}
                alt={`${p.name} ${p.tier}`}
                width={p.imgSize}
                height={p.imgSize}
                loading="eager"
                style={{ objectFit: "contain" }}
              />
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <span style={semibold}>{p.tier}</span>
                <div
                  style={{
                    width: "20.18px",
                    height: "20.18px",
                    border: "2.33px solid #1A1A1A",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ChevronRight size={12} strokeWidth={2.33} color="#1A1A1A" />
                </div>
              </div>
            </div>
          ))}

          {/* ── FIELD ROWS (rows 3–6): label + 3 values ── */}
          {labels.map((label, i) => {
            const row = labelRows[i];
            const fieldKey = ["size", "notes", "bestFor", "warranty"][i];
            const isBestFor = fieldKey === "bestFor";
            return (
              <>
                {/* Label cell */}
                <div
                  key={`label-${i}`}
                  style={{
                    gridRow: `${row} / ${row + 1}`,
                    gridColumn: 1,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "15.52px",
                    borderTop: BORDER,
                    minHeight: "65px",
                  }}
                >
                  <span style={{ ...semibold, textAlign: "left" }}>
                    {label}
                  </span>
                </div>

                {/* Value cells */}
                {products.map((p) => (
                  <div
                    key={`val-${p.id}-${i}`}
                    style={{
                      gridRow: `${row} / ${row + 1}`,
                      gridColumn: p.col,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "23.28px 16px",
                      borderTop: BORDER,
                    }}
                  >
                    <span
                      style={{
                        ...fieldVal,
                        ...(isBestFor && {
                          maxWidth: p.bestForMaxWidth,
                          wordBreak: "break-word",
                        }),
                      }}
                    >
                      {p[fieldKey]}
                    </span>
                  </div>
                ))}
              </>
            );
          })}

          {/* ── BUTTON ROW (row 7) — outside the card background ── */}
          {products.map((p) => (
            <div
              key={`btn-${p.id}`}
              style={{
                gridRow: "7 / 8",
                gridColumn: p.col,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: "22.17px",
              }}
            >
              <SelectButton />
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE STACKED CARDS ── */}
      <div
        className="flex sm:hidden flex-col gap-4"
        style={{ width: "100%", maxWidth: "360px" }}
      >
        {products.map((p) => (
          <div key={`mobile-${p.id}`}>
            <div
              style={{
                backgroundColor: p.bg,
                border: BORDER,
                borderRadius: RADIUS,
                overflow: "hidden",
              }}
            >
              {/* Badge inside card as first child — overflow:hidden clips its corners */}
              {p.badge && (
                <div
                  style={{
                    width: "100%",
                    height: "37.92px",
                    backgroundColor: "#1A1A1A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: gs,
                      fontWeight: 600,
                      fontSize: "15.52px",
                      lineHeight: "120%",
                      letterSpacing: "1%",
                      color: "#FFFCF9",
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
              )}
              <div style={{ padding: "24px 16px" }}>
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <span style={semibold}>{p.name}</span>
                  <Image
                    src={p.imgSrc}
                    alt={`${p.name} ${p.tier}`}
                    width={p.imgSize}
                    height={p.imgSize}
                    loading="eager"
                    style={{ objectFit: "contain" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span style={semibold}>{p.tier}</span>
                    <div
                      style={{
                        width: "20.18px",
                        height: "20.18px",
                        border: "2.33px solid #1A1A1A",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ChevronRight
                        size={12}
                        strokeWidth={2.33}
                        color="#1A1A1A"
                      />
                    </div>
                  </div>
                </div>

                {/* Field rows with inline labels */}
                {labels.map((label, i) => {
                  const fieldKey = ["size", "notes", "bestFor", "warranty"][i];
                  const isBestFor = fieldKey === "bestFor";
                  return (
                    <div
                      key={`mfield-${i}`}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: BORDER,
                        padding: "23.28px 15.52px",
                        gap: "8px",
                      }}
                    >
                      <span style={{ ...semibold, flexShrink: 0 }}>
                        {label}
                      </span>
                      <span
                        style={{
                          ...fieldVal,
                          textAlign: "right",
                          ...(isBestFor && {
                            maxWidth: p.bestForMaxWidth,
                            wordBreak: "break-word",
                          }),
                        }}
                      >
                        {p[fieldKey]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Button outside card */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "22.17px",
              }}
            >
              <SelectButton />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
