import { useEffect } from "react";
import { useCreatePDFController } from "../hooks/useCreatePDFController";

const content1 = [
  {
    table: {
      widths: ["11.2%", "8.2%", "14.2%", "14.2%", "14.2%", "14.2%", "23.2%"],
      body: [
        [
          {
            text: "การเคหะแห่งชาติ",
            colSpan: 7,
            alignment: "center",
            bold: true,
          },
          {},
          {},
          {},
          {},
          {},
          {},
        ],
        [
          { text: "รายงานประจำวัน", colSpan: 3 },
          {},
          {},
          { text: "ฝ่ายพัฒนาโครงการ", colSpan: 2 },
          {},
          { text: "กองบริหารโครงการ", colSpan: 2 },
          {},
        ],
        [
          { text: "วันที่", colSpan: 3 },
          {},
          {},
          { text: "โครงการ", colSpan: 4 },
          {},
          {},
          {},
        ],
        [
          { text: "ผู้จัดการงานก่อสร้าง", colSpan: 4 },
          {},
          {},
          {},
          { text: "ผู้รับจ้าง", colSpan: 3 },
          {},
          {},
        ],
        [
          { text: "ผู้จัดการสนาม", colSpan: 4 },
          {},
          {},
          {},
          { text: "ผู้แทนผู้รับจ้าง", colSpan: 3 },
          {},
          {},
        ],
        // Header row
        [
          {
            text: "สภาพอากาศ",
            style: "tableHeader",
            alignment: "center",
            rowSpan: 3,
            marginTop: 20,
          },
          { text: "เช้า", style: "tableHeader" },
          { text: "☐ ปกติ", style: "tableHeader" },
          { text: "☐ มืดครึ้ม", style: "tableHeader" },
          { text: "☐ ฝนตก", style: "tableHeader" },
          {
            text: "เวลาทำงาน",
            style: "tableHeader",
            alignment: "center",
            rowSpan: 3,
            marginTop: 20,
          },
          { text: "เริ่มงานเวลา" },
        ],
        // Example data rows
        [
          {},
          { text: "บ่าย" },
          { text: "☐ ปกติ" },
          { text: "☐ มืดครึ้ม", style: "tableHeader" },
          { text: "☐ ฝนตก", style: "tableHeader" },
          {},
          { text: "เลิกงานเวลา" },
        ],
        [
          {},
          { text: "กลางคืน" },
          { text: "☐ ปกติ" },
          { text: "☐ มืดครึ้ม", style: "tableHeader" },
          { text: "☐ ฝนตก", style: "tableHeader" },
          {},
          { text: "ล่วงเวลา" },
        ],
      ],
    },
  },
];

const content2 = [
  {
    table: {
      headerRows: 1,
      widths: ["*", 100, 100],
      body: [
        [
          {
            text: "รายการ",
            style: "tableHeader",
            alignment: "center",
            rowSpan: 2,
          },
          {
            text: "บุคลากรของผู้รับจ้าง",
            style: "tableHeader",
            alignment: "center",
            colSpan: 2,
          },
          "",
        ],
        [
          "",
          { text: "ตำแหน่ง", style: "tableHeader", alignment: "center" },
          { text: "จำนวน", style: "tableHeader", alignment: "center" },
        ],
        ...Array.from({ length: 15 }, (x, i) => {
          if (i===14){
            return [
              { text: "", marginTop: 10 },
              { text: "รวม" , alignment: "center" },
              { text: "", marginTop: 10 },
            ]
          }else{
            return [
              { text: "", marginTop: 10 },
              { text: "", marginTop: 10 },
              { text: "", marginTop: 10 },
            ]
          }
        }),
      ],
    },
    marginTop: 20,
  },
];

const content3 = [
  {
    table: {
      widths: ["50%", "50%"], // Two columns with equal widths
      body: [
        [
          { text: "ปัญหาและอุปสรรค", style: "tableHeader" },
          { text: "การทำงานล่วงเวลา", style: "tableHeader" },
        ],
        [
          {
            text: "_________________________________________________\n".repeat(
              5
            ),
            alignment: "left",
            margin: [5, 5, 5, 5],
          },
          {
            text: "_________________________________________________\n".repeat(
              5
            ),
            alignment: "left",
            margin: [5, 5, 5, 5],
          },
        ],
      ],
    },
    marginTop: 20,
  },
];

const content4 = [
  {
    table: {
      widths: ["25%", "10%", "15%", "25%", "10%", "15%"], // Adjust widths for balance
      body: [
        // Header row
        [
          {
            text: "ประเภทเครื่องจักร",
            style: "tableHeader",
          },
          {
            text: "จำนวน",
            style: "tableHeader",
          },
          {
            text: "ชั่วโมงการทำงาน",
            style: "tableHeader",
          },
          {
            text: "ประเภทเครื่องจักร",
            style: "tableHeader",
          },
          {
            text: "จำนวน",
            style: "tableHeader",
          },
          {
            text: "ชั่วโมงการทำงาน",
            style: "tableHeader",
          },
        ],
        ...Array.from({ length: 4 }, (x, i) => [
          { text: "", marginTop: 10 },
          { text: "", marginTop: 10 },
          { text: "", marginTop: 10 },
          { text: "", marginTop: 10 },
          { text: "", marginTop: 10 },
          { text: "", marginTop: 10 },
        ]),
        // Add more rows as needed
      ],
    },
    // layout: {
    //   hLineWidth: () => 1, // Horizontal line width
    //   vLineWidth: () => 1, // Vertical line width
    // },
    marginTop: 20,
  },
];

const content5 = [
  {
    table: {
      widths: ['50%', '50%'], // Adjust column widths as needed
      body: [
        // Header row
        [
          { text: 'ผู้รายงาน', style: 'tableHeader'  },
          { text: 'ผู้จัดการงานก่อสร้าง', style: 'tableHeader' , rowSpan:2 , marginTop:8 },
        ],
        // First row with a split cell
        [
          { text: 'ผู้จัดการสนาม', style: 'tableHeader', alignment: 'left' },
          { text: '', alignment: 'center' }, 
        ],
      ]
    },
    marginTop: 20,
  },
]

export default function PageKb2() {
  const { generatePDF } = useCreatePDFController({
    content: [...content1, ...content2, ...content3, ...content4,...content5],
    fileName: "form-kb1.pdf",
    // กำหนด Header (มุมขวาบน)
    header: (currentPage, pageCount) => {
      return {
        text: `คบ.3`,
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
      <h2 className="text-3xl text-center font-bold py-4">คบ.3</h2>;
      <iframe
        id="pdfViewer"
        style={{ width: "100%", height: "1200px" }}
      />
    </>
  );
}
