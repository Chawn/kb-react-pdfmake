import { useEffect } from "react";
import { useCreatePDFController } from "../hooks/useCreatePDFController";

const content1 = [
  {
    table: {
      widths: ["*"],
      body: [
        [
          {
            stack: [
              {
                text: "การคำนวณเงินเพิ่มหรือลดค่างานก่อสร้างตามสัญญาแบบปรับราคาได้ (ค่า K)",
                style: "header",
                decoration: "underline",
              },
              {
                marginBottom: 1,
                columns: [
                  {
                    width: "50%",
                    stack: [
                      {
                        text: "ก่อสร้าง" + "_".repeat(35),
                        margin: [0, 3, 0, 0],
                      },
                      {
                        text: "สัญญาเลขที่" + "_".repeat(32),
                        margin: [0, 3, 0, 0],
                      },
                      {
                        text: "ผู้รับจ้าง" + "_".repeat(35),
                        margin: [0, 3, 0, 0],
                      },
                      {
                        text: "ค่างานทั้งสัญญา" + "_".repeat(29),
                        margin: [0, 3, 0, 0],
                      },
                      {
                        text: "ค่า K เปลี่ยนแปลง ±" + "_".repeat(26),
                        margin: [0, 3, 0, 0],
                      },
                    ],
                  },
                  {
                    width: "50%",
                    stack: [
                      {
                        text: "วันที่เปิดของประกวดราคา" + "_".repeat(30),
                        margin: [0, 3, 0, 0],
                      },
                      {
                        text: "เงินต้นสัญญา" + "_".repeat(40),
                        margin: [0, 3, 0, 0],
                      },
                      {
                        text: "สิ้นสุดสัญญา " + "_".repeat(40),
                        margin: [0, 3, 0, 0],
                      },
                      {
                        text: "ต่ออายุสัญญา" + "_".repeat(40),
                        margin: [0, 3, 0, 0],
                      },
                      {
                        text: "สิ้นสุดสัญญา (ใหม่)" + "_".repeat(36),
                        margin: [0, 3, 0, 0],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        [
          {
            marginBottom: 1,
            stack: [
              {
                text:
                  "วันที่เปิดของประกวดราคา" +
                  "_".repeat(35) +
                  "วันที่ส่งงวดงาน" +
                  "_".repeat(37),
                margin: [0, 3, 0, 0],
              },
              {
                text:
                  "ส่งงานครั้งที่" +
                  "_".repeat(20) +
                  "งานงวดที่" +
                  "_".repeat(14) +
                  "รายละเอียดงวดงาน" +
                  "_".repeat(38),
                margin: [0, 3, 0, 0],
              },
              {
                columns: [
                  { text: "ค่างาน", width: "22%", alignment: "right" },
                  { text: "_".repeat(24), width: "auto" },
                  { text: "บาท" },
                ],
                margin: [0, 3, 0, 0],
              },

              {
                columns: [
                  {
                    text: "หักค่างานที่ไม่อยู่ในข่ายค่า K",
                    width: "22%",
                    alignment: "right",
                  },
                  { text: "_".repeat(24), width: "auto" },
                  { text: "บาท" },
                ],
                margin: [0, 3, 0, 0],
              },

              {
                text:
                  "ค่างานที่ได้รับการพิจารณาค่า K" +
                  "_".repeat(24) +
                  "บาท (ราคาหักค่างานที่ไม่อยู่ในข่ายค่า K แล้ว)",
                margin: [0, 3, 0, 0],
              },

              {
                columns: [
                  {
                    text: "Po =",
                    width: "22%",
                    alignment: "right",
                  },
                  { text: "_".repeat(24), width: "auto" },
                  { text: "บาท" },
                ],
                margin: [0, 3, 0, 0],
              },
              {
                columns: [
                  {
                    text: "ESCALATION FACTOR ± =",
                    width: "22%",
                    alignment: "right",
                  },
                  { text: "_".repeat(24), width: "auto" },
                ],
                margin: [0, 3, 0, 0],
              },
              {
                text: "หมวดที่ 1 หมวดงานอาคาร (งานอาคาร)",
                bold: true,
                decoration: "underline",
                margin: [10, 5, 0, 0],
              },

              {
                columns: [
                  {
                    width: "22%",
                    text: "ใช้สูตร",
                  },
                  {
                    width: "5%",
                    text: "K1",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "22%",
                    text: "",
                  },
                  {
                    width: "5%",
                    text: "",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "22%",
                    text: "",
                  },
                  {
                    width: "5%",
                    text: "",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "22%",
                    text: "",
                  },
                  {
                    width: "5%",
                    text: "",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "22%",
                    text: "",
                  },
                  {
                    width: "5%",
                    text: "K1",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "7%",
                    text: "",
                  },
                  {
                    width: "auto",
                    text: "ESCALATION FACTOR (K)",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "22%",
                    text: "",
                  },
                  {
                    width: "5%",
                    text: "P",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "5%",
                    text: "",
                  },
                  {
                    width: "22%",
                    text: "ไม่ได้รับเงินชดเชยหรือเรียกคืน",
                  },

                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                text: "หมายเหตุ : ค่า K ที่หัก ± 4% มีค่าเป็นบวก (+) จ่ายเงินชดเชยเพิ่มแก่ผู้รับจ้าง",
                margin: [0, 10, 0, 0],
                fontSize: 6,
              },
              {
                text: "หมายเหตุ : ค่า K ที่หัก ± 4% มีค่าเป็นลบ (-) เรียกคืนค่างานจากผู้รับจ้าง",
                fontSize: 6,
                margin: [0, 2, 0, 0],
              },
            ],
          },
        ],
        [
          {
            marginBottom: 1,
            stack: [
              {
                text:
                  "วันที่เปิดของประกวดราคา" +
                  "_".repeat(35) +
                  "วันที่ส่งงวดงาน" +
                  "_".repeat(37),
                margin: [0, 3, 0, 0],
              },
              {
                text:
                  "ส่งงานครั้งที่" +
                  "_".repeat(20) +
                  "งานงวดที่" +
                  "_".repeat(14) +
                  "รายละเอียดงวดงาน" +
                  "_".repeat(38),
                margin: [0, 3, 0, 0],
              },
              {
                columns: [
                  { text: "ค่างาน", width: "22%", alignment: "right" },
                  { text: "_".repeat(24), width: "auto" },
                  { text: "บาท" },
                ],
                margin: [0, 3, 0, 0],
              },

              {
                columns: [
                  {
                    text: "หักค่างานที่ไม่อยู่ในข่ายค่า K",
                    width: "22%",
                    alignment: "right",
                  },
                  { text: "_".repeat(24), width: "auto" },
                  { text: "บาท" },
                ],
                margin: [0, 3, 0, 0],
              },

              {
                text:
                  "ค่างานที่ได้รับการพิจารณาค่า K" +
                  "_".repeat(24) +
                  "บาท (ราคาหักค่างานที่ไม่อยู่ในข่ายค่า K แล้ว)",
                margin: [0, 3, 0, 0],
              },

              {
                columns: [
                  {
                    text: "Po =",
                    width: "22%",
                    alignment: "right",
                  },
                  { text: "_".repeat(24), width: "auto" },
                  { text: "บาท" },
                ],
                margin: [0, 3, 0, 0],
              },
              {
                columns: [
                  {
                    text: "ESCALATION FACTOR ± =",
                    width: "22%",
                    alignment: "right",
                  },
                  { text: "_".repeat(24), width: "auto" },
                ],
                margin: [0, 3, 0, 0],
              },
              {
                text: "หมวดที่ 2 หมวดงานดิน (การขุดดิน การตักดิน การบดอัดดิน การถมดิน ฯลฯ)",
                bold: true,
                decoration: "underline",
                margin: [10, 5, 0, 0],
              },

              {
                columns: [
                  {
                    width: "22%",
                    text: "ใช้สูตร",
                  },
                  {
                    width: "5%",
                    text: "K2.1",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "22%",
                    text: "",
                  },
                  {
                    width: "5%",
                    text: "",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "22%",
                    text: "",
                  },
                  {
                    width: "5%",
                    text: "",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "22%",
                    text: "",
                  },
                  {
                    width: "5%",
                    text: "",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "22%",
                    text: "",
                  },
                  {
                    width: "5%",
                    text: "K2.1",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "7%",
                    text: "",
                  },
                  {
                    width: "auto",
                    text: "ESCALATION FACTOR (K)",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "22%",
                    text: "",
                  },
                  {
                    width: "5%",
                    text: "P",
                  },
                  {
                    width: "*",
                    text: "=" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "5%",
                    text: "",
                  },
                  {
                    width: "22%",
                    text: "จ่ายเงินชดเชยเพิ่ม แก่ผู้รับจ้าง",
                  },
                  {
                    width: "*",
                    text: " =" + "_".repeat(70),
                  },
                ],
                margin: [10, 5, 0, 0],
              },
              {
                text: "หมายเหตุ : ค่า K ที่หัก ± 4% มีค่าเป็นบวก (+) จ่ายเงินชดเชยเพิ่มแก่ผู้รับจ้าง",
                margin: [0, 10, 0, 0],
                fontSize: 6,
              },
              {
                text: "หมายเหตุ : ค่า K ที่หัก ± 4% มีค่าเป็นลบ (-) เรียกคืนค่างานจากผู้รับจ้าง",
                fontSize: 6,
                margin: [0, 2, 0, 0],
              },
            ],
          },
        ],
      ],
    },
  },
];

export default function PageKb2() {
  const { generatePDF } = useCreatePDFController({
    content: [...content1],
    fileName: "form-k2.pdf",
  });

  useEffect(() => {
    generatePDF();
  }, []);

  return (
    <>
      <iframe
        id="pdfViewer"
        style={{ width: "100%", height: "1200px" }}
      />
    </>
  );
}
