import { useEffect } from "react";
import { useCreatePDFController } from "../hooks/useCreatePDFController";

const content1 = [
  {
    table: {
      widths: ["65%", "35%"],
      body: [
        [
          {
            text: "แบบฟอร์มการจ่ายเงินตามสัญญาแบบปรับราคาได้ (ค่า K)",
            bold: true,
            alignment: "center",
            colSpan: 2,
            lineHeight: 0.8,
          },
          {},
        ],
        [
          {
            columns: [
              {
                width: "auto",
                text: "ก่อสร้าง",
                lineHeight: 0.8,
              },
              {
                text: "_".repeat(73),
              },
            ],
          },
          {
            columns: [
              {
                width: "36%",
                text: "1.ส่งงานงวดสุดท้าย",
                alignment: "right",
                lineHeight: 0.8,
              },
              {
                text: "_".repeat(35),
              },
            ],
          },
        ],
        [
          {
            columns: [
              {
                text: "สัญญาเลขที่",
                width: "auto",
                lineHeight: 0.8,
              },
              {
                width: "12%",
                text: "_".repeat(12),
              },
              {
                width: "auto",
                text: "วันที่เปิดของประกวดราคา",
              },
              {
                width: "12%",
                text: "_".repeat(12),
              },
              {
                width: "auto",
                text: "ค่างานทั้งสัญญา",
              },
              {
                width: "15%",
                text: "_".repeat(15),
              },
              {
                width: "auto",
                text: "บาท",
              },
            ],
          },
          {
            columns: [
              {
                width: "73%",
                text: "2.ครบ 90 วันนับจากวันส่งมอบงาน งวดสุดท้าย",
                lineHeight: 0.8,
                alignment: "right",
              },
              {
                width: "auto",
                text: "_".repeat(15),
              },
            ],
          },
        ],
        [
          {
            columns: [
              {
                text: "ลงวันที่",
                width: "auto",
                lineHeight: 0.8,
              },
              {
                width: "34%",
                text: "_".repeat(34),
              },
              {
                width: "auto",
                text: "ผู้รับจ้าง",
              },
              {
                width: "34%",
                text: "_".repeat(34),
              },
            ],
          },
          {
            columns: [
              {
                text: "3.ค่า K เปลื่ยนเเปลง ± ",
                alignment: "right",
                lineHeight: 0.8,
                width: "40%",
              },
              {
                width: "auto",
                text: "_".repeat(33),
              },
            ],
          },
        ],
        [
          {
            columns: [
              {
                text: "สัญญาเริ่ม",
                width: "auto",
                lineHeight: 0.8,
              },
              {
                text: "_".repeat(32),
                width: "32%",
              },
              {
                width: "auto",
                text: "สิ้นสุด (เดิม)",
                lineHeight: 0.8,
              },
              {
                text: "_".repeat(31),
                width: "31%",
              },
            ],
          },
          {
            text: "",
          },
        ],
        [
          {
            columns: [
              {
                text: "ต่ออายุสัญญาครั้งที่ 1",
                width: "auto",
                lineHeight: 0.8,
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
              {
                text: "วันสิ้นสุด (ใหม่)",
                width: "auto",
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
              {
                text: "ต่ออายุสัญญาครั้งที่ 5",
                width: "auto",
              },
              {
                text: "_".repeat(8),
                width: "8%",
              },
              {
                text: "วันสิ้นสุด (ใหม่)",
                width: "auto",
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
            ],
          },
          {
            columns: [
              {
                text: "(ลงชื่อ)",
                width: "auto",
              },
              {
                text: "_".repeat(16),
                width: "31%",
              },
              {
                text: "ผู้คำนวณ, ตำแหน่ง",
                width: "auto",
              },
              {
                text: "_".repeat(17),
                width: "auto",
              },
            ],
            marginLeft: 5,
          },
        ],
        [
          {
            columns: [
              {
                text: "ต่ออายุสัญญาครั้งที่ 2",
                width: "auto",
                lineHeight: 0.8,
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
              {
                text: "วันสิ้นสุด (ใหม่)",
                width: "auto",
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
              {
                text: "ต่ออายุสัญญาครั้งที่ 6",
                width: "auto",
              },
              {
                text: "_".repeat(8),
                width: "8%",
              },
              {
                text: "วันสิ้นสุด (ใหม่)",
                width: "auto",
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
            ],
          },
          {
            columns: [
              {
                text: "(",
                width: "auto",
              },
              {
                text: "_".repeat(17),
                width: "35%",
              },
              {
                text: ")",
                width: "auto",
              },
            ],
            marginLeft: 25,
          },
        ],
        [
          {
            columns: [
              {
                text: "ต่ออายุสัญญาครั้งที่ 3",
                width: "auto",
                lineHeight: 0.8,
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
              {
                text: "วันสิ้นสุด (ใหม่)",
                width: "auto",
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
              {
                text: "ต่ออายุสัญญาครั้งที่ 7",
                width: "auto",
              },
              {
                text: "_".repeat(8),
                width: "8%",
              },
              {
                text: "วันสิ้นสุด (ใหม่)",
                width: "auto",
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
            ],
          },
          {
            columns: [
              {
                text: "วันที่",
                width: "auto",
              },
              {
                text: "_".repeat(18),
                width: "36%",
              },
            ],
            marginLeft: 10,
          },
        ],
        [
          {
            columns: [
              {
                text: "ต่ออายุสัญญาครั้งที่ 4",
                width: "auto",
                lineHeight: 0.8,
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
              {
                text: "วันสิ้นสุด (ใหม่)",
                width: "auto",
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
              {
                text: "ต่ออายุสัญญาครั้งที่ 8",
                width: "auto",
              },
              {
                text: "_".repeat(8),
                width: "8%",
              },
              {
                text: "วันสิ้นสุด (ใหม่)",
                width: "auto",
              },
              {
                text: "_".repeat(9),
                width: "9%",
              },
            ],
          },
          {
            columns: [
              {
                text: "(ลงชื่อ)",
                width: "auto",
              },
              {
                text: "_".repeat(16),
                width: "31%",
              },
              {
                text: "ผู้ตรวจสอบ, ตำแหน่ง",
                width: "auto",
              },
              {
                text: "_".repeat(15),
                width: "auto",
              },
            ],
            marginLeft: 5,
            marginTop: 2,
          },
        ],
        [
          {
            columns: [{}],
          },
          {
            text: "(" + "_".repeat(17) + ")",
            marginLeft: 23,
            lineHeight: 0.8,
          },
        ],
        [
          {
            columns: [{}],
          },
          {
            text: "วันที่" + "_".repeat(17),
            marginLeft: 10,
            lineHeight: 0.8,
          },
        ],
      ],
    },
    layout: "noBorders",
  },
];

const content2 = [
  {
    marginTop: 10,
    table: {
      headerRows: 1, // ระบุว่าแถวแรกเป็น header
      widths: [
        "5%",
        "20%",
        "10%",
        "10%",
        "10%",
        "7.5%",
        "7.5%",
        "10%",
        "10%",
        "10%",
      ],
      body: [
        [
          {
            text: "งวดงาน\nที่",
            style: "tableHeader",
            alignment: "center",
            marginTop: 5,
          },
          {
            text: "รายการ",
            style: "tableHeader",
            alignment: "center",
            marginTop: 10,
          },
          {
            text: "ค่างาน\nจำนวนเงิน",
            style: "tableHeader",
            alignment: "center",
            marginTop: 5,
          },
          {
            text: "หักค่างาน\nที่ไม่อยู่ในข่าย\nค่า K (บาท)",
            style: "tableHeader",
            alignment: "center",
          },
          {
            text: "ค่างานที่ได้\nรับการพิจารณา\nค่า K (บาท)",
            style: "tableHeader",
            alignment: "center",
          },
          {
            text: "สูตร\nค่า K",
            style: "tableHeader",
            alignment: "center",
            marginTop: 5,
          },
          {
            text: "คำนวณ\nค่า K",
            style: "tableHeader",
            alignment: "center",
            marginTop: 5,
          },
          {
            text: "ส่วนแตกต่าง\n± 4%\nคงเหลือ",
            style: "tableHeader",
            alignment: "center",
          },
          {
            text: "เพิ่มขึ้น / ลดลง\nคิดเป็นเงิน\n(บาท)",
            style: "tableHeader",
            alignment: "center",
          },
          {
            text: "หมายเหตุ",
            style: "tableHeader",
            alignment: "center",
            marginTop: 10,
          },
        ],
        // เพิ่มข้อมูลในแต่ละแถวในรูปแบบ array
        ...Array.from({ length: 17 }, (_, i) => [
          { text: "", margin: [0, 10, 0, 0] },
          { text: "", margin: [0, 10, 0, 0] },
          { text: "", margin: [0, 10, 0, 0] },
          { text: "", margin: [0, 10, 0, 0] },
          { text: "", margin: [0, 10, 0, 0] },
          { text: "", margin: [0, 10, 0, 0] },
          { text: "", margin: [0, 10, 0, 0] },
          { text: "", margin: [0, 10, 0, 0] },
          { text: "", margin: [0, 10, 0, 0] },
          { text: "", margin: [0, 10, 0, 0] },
        ]),
        // [
        //   { text: "1", alignment: "center" },
        //   { text: "ตัวอย่างรายการ 1" },
        //   { text: "100,000", alignment: "right" },
        //   { text: "95,000", alignment: "right" },
        //   { text: "5,000", alignment: "right" },
        //   { text: "0.05", alignment: "right" },
        //   { text: "2,500", alignment: "right" },
        //   { text: "2,500", alignment: "right" },
        //   { text: "0", alignment: "right" },
        //   { text: "0", alignment: "right" },
        // ],
        // [
        //   { text: "2", alignment: "center" },
        //   { text: "ตัวอย่างรายการ 2" },
        //   { text: "200,000", alignment: "right" },
        //   { text: "180,000", alignment: "right" },
        //   { text: "20,000", alignment: "right" },
        //   { text: "0.1", alignment: "right" },
        //   { text: "10,000", alignment: "right" },
        //   { text: "10,000", alignment: "right" },
        //   { text: "0", alignment: "right" },
        //   { text: "0", alignment: "right" },
        // ],
      ],
    },
    layout: {
      hLineWidth: function (i, node) {
        return i === 0 || i === node.table.body.length ? 2 : 1; // เส้นขอบหนาสำหรับขอบตาราง
      },
      vLineWidth: function (i) {
        return 1; // ความหนาของเส้นแนวตั้ง
      },
      hLineColor: function (i) {
        return "black"; // สีของเส้นแนวนอน
      },
      vLineColor: function (i) {
        return "black"; // สีของเส้นแนวตั้ง
      },
    },
  },
];

export default function PageKb2() {
  const { generatePDF } = useCreatePDFController({
    content: [...content1, ...content2],
    fileName: "form-k1.pdf",
    pageOrientation: "landscape",
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
