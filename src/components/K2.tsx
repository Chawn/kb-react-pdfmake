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
                marginBottom: 2,
                bold: true,
              },
              {
                marginBottom: 5,
                columns: [
                  {
                    width: "50%",
                    stack: [
                      {
                        text: "ก่อสร้าง" + "_".repeat(55),
                        style: "text",
                        margin: [0, 5, 0, 0],
                      },
                      {
                        text: "สัญญาเลขที่" + "_".repeat(52),
                        style: "text",
                        margin: [0, 5, 0, 0],
                      },
                      {
                        text: "ผู้รับจ้าง" + "_".repeat(55),
                        style: "text",
                        margin: [0, 5, 0, 0],
                      },
                      {
                        text: "ค่างานทั้งสัญญา" + "_".repeat(49),
                        style: "text",
                        margin: [0, 5, 0, 0],
                      },
                      {
                        text: "ค่า K เปลี่ยนแปลง ±" + "_".repeat(46),
                        style: "text",
                        margin: [0, 5, 0, 0],
                      },
                    ],
                  },
                  {
                    width: "50%",
                    stack: [
                      {
                        text: "วันที่เปิดของประกวดราคา" + "_".repeat(45),
                        style: "text",
                        margin: [0, 5, 0, 0],
                      },
                      {
                        text: "เงินต้นสัญญา" + "_".repeat(55),
                        margin: [0, 5, 0, 0],
                        style: "text",
                      },
                      {
                        text: "สิ้นสุดสัญญา " + "_".repeat(55),
                        margin: [0, 5, 0, 0],
                        style: "text",
                      },
                      {
                        text: "ต่ออายุสัญญา" + "_".repeat(55),
                        style: "text",
                        margin: [0, 5, 0, 0],
                      },
                      {
                        text: "สิ้นสุดสัญญา (ใหม่)" + "_".repeat(51),
                        style: "text",
                        margin: [0, 5, 0, 0],
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
            marginBottom: 5,
            stack: [
              {
                text:
                  "วันที่เปิดของประกวดราคา" +
                  "_".repeat(50) +
                  "วันที่ส่งงวดงาน" +
                  "_".repeat(52),
                style: "text",
                margin: [0, 5, 0, 0],
              },
              {
                text:
                  "ส่งงานครั้งที่" +
                  "_".repeat(10) +
                  "งานงวดที่" +
                  "_".repeat(10) +
                  "รายละเอียดงวดงาน" +
                  "_".repeat(82),
                style: "text",
                margin: [0, 5, 0, 0],
              },
              {
                columns: [
                  {
                    text: "ค่างาน",
                    width: "17%",
                    alignment: "right",
                    style: "text",
                  },
                  { text: "_".repeat(24), width: "auto", style: "text" },
                  { text: "บาท", style: "text" },
                ],
                margin: [0, 5, 0, 0],
              },

              {
                columns: [
                  {
                    text: "หักค่างานที่ไม่อยู่ในข่ายค่า K",
                    width: "17%",
                    alignment: "right",
                    style: "text",
                  },
                  { text: "_".repeat(24), width: "auto", style: "text" },
                  { text: "บาท", style: "text" },
                ],
                margin: [0, 5, 0, 0],
              },

              {
                text:
                  "ค่างานที่ได้รับการพิจารณาค่า K" +
                  "_".repeat(24) +
                  "บาท (ราคาหักค่างานที่ไม่อยู่ในข่ายค่า K แล้ว)",
                margin: [0, 5, 0, 0],
                style: "text",
              },

              {
                columns: [
                  {
                    text: "Po =",
                    width: "17%",
                    alignment: "right",
                    style: "text",
                  },
                  { text: "_".repeat(24), width: "auto", style: "text" },
                  { text: "บาท", style: "text" },
                ],
                margin: [0, 5, 0, 0],
              },
              {
                columns: [
                  {
                    text: "ESCALATION FACTOR ± =",
                    width: "17%",
                    alignment: "right",
                    style: "text",
                  },
                  { text: "_".repeat(24), width: "auto", style: "text" },
                ],
                margin: [0, 5, 0, 0],
              },
              {
                text: "หมวดที่ 1 หมวดงานอาคาร (งานอาคาร)",
                bold: true,
                decoration: "underline",
                margin: [0, 5, 0, 0],
              },

              {
                columns: [
                  {
                    width: "22%",
                    text: "ใช้สูตร",
                    style: "text",
                  },
                  {
                    width: "5%",
                    text: "K1",
                    style: "text",
                    alignment: "right",
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
                    style: "text",
                    alignment: "right",
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
                    width: "11%",
                    text: "",
                  },
                  {
                    width: "auto",
                    text: "ESCALATION FACTOR  (K)",
                    style: "text",
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
                    style: "text",
                    alignment: "right",
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
                    style: "text",
                    alignment: "right",
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
                margin: [0, 5, 0, 0],
                style: "text",
                fontSize: 5,
              },
              {
                text: "หมายเหตุ : ค่า K ที่หัก ± 4% มีค่าเป็นลบ (-) เรียกคืนค่างานจากผู้รับจ้าง",
                fontSize: 5,
                margin: [0, 5, 0, 0],
                style: "text",
              },
            ],
          },
        ],
        [
          {
            marginBottom: 5,
            stack: [
              {
                text:
                  "วันที่เปิดของประกวดราคา" +
                  "_".repeat(50) +
                  "วันที่ส่งงวดงาน" +
                  "_".repeat(52),
                style: "text",
                margin: [0, 5, 0, 0],
              },
              {
                text:
                  "ส่งงานครั้งที่" +
                  "_".repeat(10) +
                  "งานงวดที่" +
                  "_".repeat(10) +
                  "รายละเอียดงวดงาน" +
                  "_".repeat(82),
                style: "text",
                margin: [0, 5, 0, 0],
              },
              {
                columns: [
                  {
                    text: "ค่างาน",
                    width: "17%",
                    alignment: "right",
                    style: "text",
                  },
                  { text: "_".repeat(24), width: "auto", style: "text" },
                  { text: "บาท", style: "text" },
                ],
                margin: [0, 5, 0, 0],
              },

              {
                columns: [
                  {
                    text: "หักค่างานที่ไม่อยู่ในข่ายค่า K",
                    width: "17%",
                    alignment: "right",
                    style: "text",
                  },
                  { text: "_".repeat(24), width: "auto", style: "text" },
                  { text: "บาท", style: "text" },
                ],
                margin: [0, 5, 0, 0],
              },

              {
                text:
                  "ค่างานที่ได้รับการพิจารณาค่า K" +
                  "_".repeat(24) +
                  "บาท (ราคาหักค่างานที่ไม่อยู่ในข่ายค่า K แล้ว)",
                margin: [0, 5, 0, 0],
                style: "text",
              },

              {
                columns: [
                  {
                    text: "Po =",
                    width: "17%",
                    alignment: "right",
                    style: "text",
                  },
                  { text: "_".repeat(24), width: "auto", style: "text" },
                  { text: "บาท", style: "text" },
                ],
                margin: [0, 5, 0, 0],
              },
              {
                columns: [
                  {
                    text: "ESCALATION FACTOR ± =",
                    width: "17%",
                    alignment: "right",
                    style: "text",
                  },
                  { text: "_".repeat(24), width: "auto", style: "text" },
                ],
                margin: [0, 5, 0, 0],
              },
              {
                text: "หมวดที่ 2 หมวดงานดิน (การขุดดิน การตักดิน การบดอัดดิน การถมดิน ฯลฯ)",
                bold: true,
                decoration: "underline",
                margin: [0, 5, 0, 0],
              },
              {
                columns: [
                  {
                    width: "22%",
                    text: "ใช้สูตร",
                    style: "text",
                  },
                  {
                    width: "5%",
                    text: "K2.1",
                    style: "text",
                    alignment: "right",
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
                    style: "text",
                    alignment: "right",
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
                    width: "11%",
                    text: "",
                  },
                  {
                    width: "auto",
                    text: "ESCALATION FACTOR  (K)",
                    style: "text",
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
                    alignment: "right",
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
                    style: "text",
                    alignment: "right",
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
                style: "text",
                margin: [0, 5, 0, 0],
                fontSize: 5,
              },
              {
                text: "หมายเหตุ : ค่า K ที่หัก ± 4% มีค่าเป็นลบ (-) เรียกคืนค่างานจากผู้รับจ้าง",
                style: "text",
                fontSize: 5,
                margin: [0, 5, 0, 0],
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
    styles: {
      text: {
        fontSize: 7,
      },
    },
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
