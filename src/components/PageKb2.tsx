import { useEffect } from "react";
import { useCreatePDFController } from "../hooks/useCreatePDFController";

const content = [
  // Header ส่วนหัว
  {
    text: "รายงานประจำสัปดาห์",
    style: "header",
    alignment: "center",
    margin: [0, 0, 0, 10],
  },
  {
    stack: [
      {
        columns: [
          { text: "", width: "15%" },
          {
            text: "โครงการ",
            width: "15%",
          },
          {
            text: "____________________________________________",
            width: "auto",
          },
          { text: "", width: "15%" },
        ],
        margin: [0, 0, 0, 5],
      },
      {
        columns: [
          { text: "", width: "15%" },
          {
            text: "ผู้รับจ้าง",
            width: "15%",
          },
          {
            text: "____________________________________________",
            width: "auto",
          },
          { text: "", width: "15%" },
        ],
        margin: [0, 0, 0, 5],
      },
      {
        columns: [
          { text: "", width: "15%" },
          {
            text: "สัญญาเลขที่",
            width: "15%",
          },
          {
            text: "____________________________________________",
            width: "auto",
          },
          { text: "", width: "15%" },
        ],
        margin: [0, 0, 0, 5],
      },
      {
        columns: [
          { text: "", width: "15%" },
          {
            text: "วันที่เริ่มสัญญา",
            width: "15%",
          },
          {
            text: "____________________________________________",
            width: "auto",
          },
          { text: "", width: "15%" },
        ],
        margin: [0, 0, 0, 5],
      },
      {
        columns: [
          { text: "", width: "15%" },
          {
            text: "วันที่สิ้นสุดสัญญา",
            width: "15%",
          },
          {
            text: "____________________________________________",
            width: "auto",
          },
          { text: "", width: "15%" },
        ],
        margin: [0, 0, 0, 5],
      },
    ],
    margin: [0, 0, 0, 10],
    alignment: "left",
  },
  // ข้อมูลเกี่ยวกับสัญญา
  {
    table: {
      widths: ["auto", "auto", "auto", "auto"],
      body: [
        [
          { text: "จาก" },
          { text: "____________________________________", alignment: "left" },
          { text: "เลขที่" },
          { text: "____________________________________", alignment: "left" },
        ],
        [
          { text: "ถึง" },
          { text: "____________________________________", alignment: "left" },
          { text: "วันที่" },
          { text: "____________________________________", alignment: "left" },
        ],
        [
          { text: "เรื่อง" },
          { text: "____________________________________", alignment: "left" },
          {},
          {},
        ],
      ],
    },
    layout: "noBorders",
    margin: [60, 0, 0, 10],
  },

  // ช่องเครื่องหมายถูก
  {
    table: {
      widths: ["auto", "auto", "auto"],
      body: [
        [
          { text: "☐ เพื่อโปรดทราบ", alignment: "center" },
          { text: "☐ เพื่อพิจารณา", alignment: "center" },
          { text: "☐ เพื่อดำเนินการ", alignment: "center" },
        ],
      ],
    },
    layout: "noBorders",
    margin: [140, 0, 0, 10],
    alignment: "center",
  },

  // ตารางสรุปการทำงาน
  {
    table: {
      widths: ["25%", "15%", "15%", "15%", "15%", "15%"],
      body: [
        [
          {
            alignment: "center",
            marginTop: 8,
            text: "รายการ",
            rowSpan: 2,
          },
          {
            text: "เดือน _____________________",
            bold: true,
            alignment: "center",
            colSpan: 5,
          },
          {},
          {},
          {},
          {},
        ],
        [
          {},
          { text: "สัปดาห์ที่ 1", alignment: "center" },
          { text: "สัปดาห์ที่ 2", alignment: "center" },
          { text: "สัปดาห์ที่ 3", alignment: "center" },
          { text: "สัปดาห์ที่ 4", alignment: "center" },
          { text: "สัปดาห์ที่ 5", alignment: "center" },
        ],
        [
          { text: "ตามแผน (%)", alignment: "left" },
          { text: "" },
          { text: "" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "ทำได้จริง (%)", alignment: "left" },
          { text: "" },
          { text: "" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "สรุป (+) เร็ว -(-) ช้า (%)", alignment: "left" },
          { text: "" },
          { text: "" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "เวลาผ่านไป (วัน)", alignment: "left" },
          { text: "" },
          { text: "" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
        [
          { text: "คงเหลือเวลา (วัน)", alignment: "left" },
          { text: "" },
          { text: "" },
          { text: "" },
          { text: "" },
          { text: "" },
        ],
      ],
    },
    margin: [0, 0, 0, 10],
  },

  // ตารางปัญหาและข้อเสนอแนะ
  {
    table: {
      widths: ["25%", "25%", "25%", "25%"],
      body: [
        [
          {
            text: "ปัญหาและอุปสรรค",
            bold: true,
            alignment: "center",
            rowSpan: 7,
            margin: [0, 40, 0, 40],
          },
          { text: "ปัญหาและอุปสรรค", bold: true, alignment: "center" },
          { text: "การแก้ไข", bold: true, alignment: "center" },
          { text: "สรุปผล", bold: true, alignment: "center" },
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
      ],
    },
    margin: [0, 0, 0, 10],
  },

  // ช่องว่างสำหรับข้อเสนอแนะเพิ่มเติม
  {
    text: "3. ตารางแสดงเรื่่องที่ต้องติดตาม ตามหัวเรื่องที่ระบุ",
    bold: true,
    margin: [0, 0, 0, 5],
    alignment: "center",
  },

  // ตารางปัญหาและข้อเสนอแนะ
  {
    table: {
      widths: ["25%", "25%", "25%", "25%"],
      body: [
        [
          {
            text: "เรื่อง",
            bold: true,
            alignment: "center",
            rowSpan: 7,
            margin: [0, 40, 0, 40],
          },
          { text: "ข้อความ", colSpan: 3 },
          {},
          {},
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", colSpan: 3, margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", colSpan: 3, margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", colSpan: 3, margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", colSpan: 3, margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", colSpan: 3, margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
        [
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", colSpan: 3, margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
          { text: "", margin: [0, 5, 0, 5] },
        ],
      ],
    },
    margin: [0, 0, 0, 10],
  },

  // ลายเซ็น
  {
    columns: [
      {
        text: "ลงชื่อผู้รับ ___________________________",
        bold: true,
        width: "50%",
        margin: [20, 20, 0, 10],
      },
      {
        text: "ลงชื่อผู้รับ ___________________________",
        bold: true,
        width: "50%",
        margin: [20, 20, 0, 10],
      },
    ],
  },
  {
    columns: [
      {
        text: "(___________________________)",
        width: "50%",
        alignment: "center",
      },
      {
        text: "(___________________________)",
        width: "50%",
        alignment: "center",
      },
    ],
  },
  {
    columns: [
      { text: "ผู้จัดการสนาม", width: "50%", alignment: "center" },
      { text: "ผู้จัดการงานก่อสร้าง", width: "50%", alignment: "center" },
    ],
  },
];

export default function PageKb2() {
  const { generatePDF } = useCreatePDFController({
    content: content,
    fileName: "form-kb1.pdf",
    // กำหนด Header (มุมขวาบน)
    header: (currentPage, pageCount) => {
      return {
        text: `คบ.2`,
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
      <h2 className="text-3xl text-center font-bold py-4">คบ.2</h2>;
      <iframe
        id="pdfViewer"
        style={{ width: "100%", height: "1200px" }}
      />
    </>
  );
}
