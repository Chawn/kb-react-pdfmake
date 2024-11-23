import { useEffect } from "react";
import { useCreatePDFController } from "../hooks/useCreatePDFController";

const content1 = [
  // Header ส่วนหัว
  {
    text: "ขออนุมัติงานเทคอนกรีต",
    style: "header",
    alignment: "center",
    margin: [0, 0, 0, 10],
  },
  {
    text: "โครงการ _________________________",
    margin: [0, 0, 0, 5],
    alignment: "center",
  },
  {
    stack: [
      {
        text: "วันที่ _________________________________",
        margin: [0, 0, 0, 0],
        alignment: "right",
      },
      {
        text: "เลขที่ _________________________________",
        margin: [0, 5, 0, 0],
        alignment: "right",
      },
    ],
    margin: [0, 0, 5, 5],
  },
  // ข้อมูลเกี่ยวกับสัญญา
  {
    table: {
      widths: ["15%", "2%", "*"],
      body: [
        [
          { text: "ถึง" },
          { text: ":", alignment: "right" },
          {
            text: "ผู้ควบคุมงาน _____________________________________________________________________________",
          },
        ],
        [
          { text: "ขออนุมัติเท" },
          { text: ":", alignment: "right" },
          {
            columns: [
              { text: "☐ ฐานราก", width: 80 },
              { text: "☐ คาน", width: 80 },
              { text: "☐ พื้นหล่อในที่", width: 80 },
              { text: "☐ พื้นสำเร็จรูป", width: 80 },
              { text: "☐ เสา", width: 80 },
            ],
          },
        ],
        [
          {},
          {},
          {
            columns: [
              { text: "☐ ผนัง", width: 80 },
              { text: "☐ อื่นๆ ____________________________", width: "*" },
            ],
          },
        ],
        [
          { text: "เอกสารประกอบ" },
          { text: ":", alignment: "right" },
          {
            columns: [
              { text: "ผังแสดงบริเวณ", width: "20%" },
              { text: "จำนวน _________ แผ่น", width: "33%" },
              { text: "อื่นๆ _________ แผ่น", width: "33%" },
            ],
          },
        ],
        [
          {},
          {},
          {
            columns: [
              { text: "แบบใช้งาน", width: "20%" },
              { text: "จำนวน _________ แผ่น", width: "33%" },
            ],
          },
        ],
        [
          {},
          {},
          {
            columns: [
              { text: "รายการตรวจสอบ", width: "20%" },
              { text: "จำนวน _________ แผ่น", width: "33%" },
            ],
          },
        ],
        [
          { text: "กำหนดการเท" },
          { text: ":", alignment: "right" },
          {
            columns: [
              { text: "วันที่ ________________________", width: "auto" },
              { text: "เวลาเริ่ม ________________________", width: "auto" },
              { text: "เสร็จ ________________________", width: "auto" },
            ],
          },
        ],
        [
          { text: "ชนิดคอนกรีต" },
          { text: ":", alignment: "right" },
          {
            columns: [
              { text: "☐ ผสมเสร็จ(รหัส) ____________________", width: "auto" },
              { text: "☐ ผสมด้วยโม่ผสม", width: "auto", marginLeft: 10 },
            ],
          },
        ],
        [
          { text: "คอนกรีต" },
          { text: ":", alignment: "right" },
          {
            columns: [
              {
                text: "กำลัง ________________________________ ksc.",
                width: "auto",
              },
              {
                text: "ค่ายุบตัว __________________________________ cm.",
                width: "auto",
                marginLeft: 10,
              },
            ],
          },
        ],
        [
          {},
          {},
          {
            columns: [
              {
                text: "วิธีการเท _________________________________",
                width: "auto",
              },
              {
                text: "ส่วนผสมพิเศษ _________________________________",
                width: "auto",
                marginLeft: 10,
              },
            ],
          },
        ],
      ],
    },
    layout: "noBorders",
  },
];

const content2 = [
  {
    marginTop: 3,
    table: {
      widths: ["11%", "35%", "20%", "20%", "14%"], // กำหนดความกว้างแต่ละคอลัมน์
      body: [
        // Header row
        [
          {
            text: "รายการ\nตรวจสอบ",
            style: "tableHeader",
            alignment: "center",
          },
          {
            text: "รายละเอียด",
            style: "tableHeader",
            marginTop: 1,
            alignment: "center",
          },
          {
            text: "ลงชื่อหัวหน้างาน",
            style: "tableHeader",
            marginTop: 1,
            alignment: "center",
          },
          {
            text: "ลงชื่อผู้ตรวจงานหรือ\nผู้ควบคุมงาน",
            style: "tableHeader",
            alignment: "center",
          },
          {
            text: "หมายเหตุ",
            style: "tableHeader",
            marginTop: 1,
            alignment: "center",
          },
        ],
        [{ text: "โครงสร้าง", colSpan: 5 }, {}, {}, { text: "" }, { text: "" }],
        [
          { text: "☐", alignment: "center"},
          { text: "ตำแหน่งและระดับ" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "เหล็กเสริม" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "ตำแหน่งเสียบเหล็กข้างเสาและเหล็กเสียบเสา" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "ตำแหน่งเสียบเหล็กคานและเหล็กเสียบคาน" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "ช่องเปิดและการเสริมเหล็กกันร้าว" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "WATER STOP" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "แผ่นพื้นสำเร็จ" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "เข้าแบบ" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "ความสะอาดเเละการฉีดน้ำ" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "อื่นๆ _______________________________" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "ระบบไฟฟ้าสุขาภิบาล", colSpan: 5 },
          { text: "" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "SLEEVES" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "ช่องเปิดเเละการเสริมเหล็กกันร้าว" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "เหล็กเสียบยึดท่อ" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "ท่อ SOIL,DRAIN,VENT,RAIN" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "☐", alignment: "center"},
          { text: "อื่นๆ _______________________________" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
      ],
    },
  },
];

const content3 = [
  {
    marginTop: 3,
    columns: [
      {
        text: "จึงเรียนมาเพื่อโปรดตรวจสอบความถูกต้องก่อนปฎิบัติงาน",
      },
      {
        stack: [
          {
            text: "ลงชื่อวิศวกรผู้ขออนุมัติ ___________________________",
          },
          {
            text: "วันที่ ___________________________",
          },
        ],
        alignment: "right",
      },
    ],
  },
  {
    columns: [
      {
        stack: [
          {
            text: "ผลการพิจารณา",
            bold: true,
          },
          {
            text: "☐ อนุมัติให้เทคอนกรีตได้",
            marginLeft: 5,
          },
          {
            text: "☐ อนุมัติตามหมายเหตุ",
            marginLeft: 5,
          },
          {
            text: "☐ ให้แก้ไขตามหมายเหตุ",
            marginLeft: 5,
          },
          {
            text: "☐ ไม่อนุมัติ",
            marginLeft: 5,
          },
        ],
        width: "40%",
      },
      {
        text: `หมายเหตุ ${"__________________________________________________".repeat(
          5
        )}__`,
        width: "60%",
      },
    ],
  },
  {
    marginTop: 8,
    columnGap: 5,
    columns: [
      {
        width: "auto",
        text: "หมายเหตุ",
        bold: true,
        decoration: "underline",
        fontSize: 8,
      },
      {
        width: "auto",
        stack: [
          {
            text: "เทคอนกรีตในช่วงเวลาเช้า ให้แจ้งก่อนล่วงหน้า 1 วัน",
            bold: true,
            fontSize: 8,
          },
          {
            text: "เทคอนกรีตในช่วงเวลาบ่าย ให้แจ้งก่อนล่วงหน้าในตอนเช้า",
            bold: true,
            fontSize: 8,
          },
        ],
      },
      {
        stack: [
          {
            text: "ผู้อนุมัติ กคช. ___________________________",
          },
          {
            text: "วันที่ ___________________________",
          },
        ],
        alignment: "right",
      },
    ],
  },
];

export default function PageKb2() {
  const { generatePDF } = useCreatePDFController({
    content: [...content1, ...content2, ...content3],
    fileName: "form-kb1.pdf",
    // กำหนด Header (มุมขวาบน)
    header: (currentPage, pageCount) => {
      return {
        text: `คบ.7`,
        alignment: "right",
        margin: [0, 20, 40, 0], // [left, top, right, bottom]
      };
    },
  });

  useEffect(() => {
    generatePDF();
  }, []);

  return (
    <>
      <h2 className="text-3xl text-center font-bold py-4">คบ.7</h2>;
      <iframe
        id="pdfViewer"
        style={{ width: "100%", height: "1200px" }}
      />
    </>
  );
}
