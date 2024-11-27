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
                text: "ก่อสร้าง" + "_".repeat(73),
                width: "auto",
                lineHeight: 0.8,
              },
            ],
          },
          {
            columns: [
              {
                text: "1.ส่งงานงวดสุดท้าย" + "_".repeat(35),
                alignment: "right",
                lineHeight: 0.8,
              },
            ],
          },
        ],
        [
          {
            columns: [
              {
                text:
                  "สัญญาเลขที่" +
                  "_".repeat(12) +
                  "วันที่เปิดของประกวดราคา" +
                  "_".repeat(12) +
                  "ค่างานทั้งสัญญา" +
                  "_".repeat(15) +
                  "บาท",
                width: "auto",
                lineHeight: 0.8,
              },
            ],
          },
          {
            columns: [
              {
                text:
                  "2.ครบ 90 วันนับจากวันส่งมอบงาน งวดสุดท้าย" + "_".repeat(15),
                alignment: "right",
                lineHeight: 0.8,
              },
            ],
          },
        ],
        [
          {
            columns: [
              {
                text:
                  "ลงวันที่" + "_".repeat(34) + "ผู้รับจ้าง" + "_".repeat(34),
                width: "auto",
                lineHeight: 0.8,
              },
            ],
          },
          {
            columns: [
              {
                text: "3.ค่า K เปลื่ยนเเปลง ± " + "__".repeat(16),
                alignment: "right",
                lineHeight: 0.8,
              },
            ],
          },
        ],
        [
          {
            columns: [
              {
                text:
                  "สัญญาเริ่ม" +
                  "_".repeat(32) +
                  "สิ้นสุด (เดิม)" +
                  "_".repeat(31),
                width: "auto",
                lineHeight: 0.8,
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
                text:
                  "ต่ออายุสัญญาครั้งที่ 1" +
                  "_".repeat(9) +
                  "วันสิ้นสุด (ใหม่)" +
                  "_".repeat(9) +
                  "ต่ออายุสัญญาครั้งที่ 5" +
                  "_".repeat(8) +
                  "วันสิ้นสุด (ใหม่)" +
                  "_".repeat(9),
                width: "auto",
                lineHeight: 0.8,
              },
            ],
          },
          {
            text:
              "(ลงชื่อ)" +
              "_".repeat(17) +
              "ผู้คำนวณ, ตำแหน่ง " +
              "_".repeat(17),
            lineHeight: 0.8,
          },
        ],
        [
          {
            columns: [
              {
                text:
                  "ต่ออายุสัญญาครั้งที่ 2" +
                  "_".repeat(9) +
                  "วันสิ้นสุด (ใหม่)" +
                  "_".repeat(9) +
                  "ต่ออายุสัญญาครั้งที่ 6" +
                  "_".repeat(8) +
                  "วันสิ้นสุด (ใหม่)" +
                  "_".repeat(9),
                width: "auto",
                lineHeight: 0.8,
              },
            ],
          },
          {
            text: "(" + "_".repeat(17) + ")",
            marginLeft: 23,
            lineHeight: 0.8,
          },
        ],
        [
          {
            columns: [
              {
                text:
                  "ต่ออายุสัญญาครั้งที่ 3" +
                  "_".repeat(9) +
                  "วันสิ้นสุด (ใหม่)" +
                  "_".repeat(9) +
                  "ต่ออายุสัญญาครั้งที่ 7" +
                  "_".repeat(8) +
                  "วันสิ้นสุด (ใหม่)" +
                  "_".repeat(9),
                width: "auto",
                lineHeight: 0.8,
              },
            ],
          },
          {
            text: "วันที่" + "_".repeat(17),
            marginLeft: 10,
            lineHeight: 0.8,
          },
        ],
        [
          {
            columns: [
              {
                text:
                  "ต่ออายุสัญญาครั้งที่ 4" +
                  "_".repeat(9) +
                  "วันสิ้นสุด (ใหม่)" +
                  "_".repeat(9) +
                  "ต่ออายุสัญญาครั้งที่ 8" +
                  "_".repeat(8) +
                  "วันสิ้นสุด (ใหม่)" +
                  "_".repeat(9),
                width: "auto",
                lineHeight: 0.8,
              },
            ],
          },
          {
            text:
              "(ลงชื่อ)" +
              "_".repeat(17) +
              "ผู้ตรวจสอบ, ตำแหน่ง " +
              "_".repeat(15),
            lineHeight: 0.8,
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
			{text:'',margin: [0,10,0,0]},
			{text:'',margin: [0,10,0,0]},
			{text:'',margin: [0,10,0,0]},
			{text:'',margin: [0,10,0,0]},
			{text:'',margin: [0,10,0,0]},
			{text:'',margin: [0,10,0,0]},
			{text:'',margin: [0,10,0,0]},
			{text:'',margin: [0,10,0,0]},
			{text:'',margin: [0,10,0,0]},
			{text:'',margin: [0,10,0,0]},
		])
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
