import React, { useEffect } from "react";
import { useCreatePDFController } from "../hooks/useCreatePDFController";

const content1 = [
	{
		width: "100%",
		table: {
			widths: ["15%", "25%", "10%", "10%", "10%", "10%", "13%", "7%"],
			body: [
				[
					{
						text: "กองบริหารโครงการ 4 ฝ่ายพัฒนาโครงการ 2",
						bold: true,
						alignment: "center",
						colSpan: 8,
						border: [false, false, false, false],
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
				],
				[
					{
						text: "โครงการบ้านสวัสดิการข้าราชการ (เช่าซื้อ) จังหวัดปัตตานี",
						bold: true,
						alignment: "center",
						colSpan: 8,
						border: [true, true, true, true],
						fillColor: "#00008B", // Dark blue color
						color: "white",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
				],
				[
					{
						text: "ที่ตั้งโครงการ",
						bold: true,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "อยู่ริมถนนหลวงหมายเลข 410 (ปัตตานี - ยะลา) ตำบล ตะลุโบะ อำเภอ เมืองจังหวัด ปัตตานี",
						colSpan: 3,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{},
					{},
					{
						text: "ผู้รับจ้าง",
						bold: true,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "หจก.นันทวัฒนะไชย การก่อสร้าง",
						colSpan: 3,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{},
					{},
				],
				[
					{
						text: "ใบอนุญาติก่อสร้าง",
						bold: true,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "เลขที่ 20/2564 ลงวันที่ 11 กุมภาพันธ์ 2562",
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "วันเริ่มต้น",
						bold: true,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "11 กุมภาพันธ์ 2562",
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "วันสิ้นสุด",
						bold: true,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "2 เมษายน 2562",
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "ต่อใบอนุญาติครั้งที่",
						bold: true,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "4",
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
				],
				[
					{
						text: "สัญญาเลขที่",
						bold: true,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "พก.2-01/2562 ลงวันที่ 29 พฤศจิกายน 2561",
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "รูปแบบอาคาร",
						bold: true,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "บ้านเดี่ยว 2 ชั้น และ บ้านแฝด 2 ชั้น",
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "จำนวนหน่วย",
						bold: true,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "115 หน่วย",
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "หน่วยส่งมอบ ปี 67",
						bold: true,
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						text: "58 หน่วย",
						border: [true, true, true, true],
						fillColor: "#FFFFE0", // Light yellow color
					},
				],
			],
		},
	},
];

const content2 = [
	{
		width: "100%",
		table: {
			widths: [
				"15%", // ค่าก่อสร้างตามสัญญา
				"12%", // จำนวนเงิน
				"7%", // สัญญาก่อสร้าง
				"7%", // ต่อสัญญา
				"5%", // วันเริ่มต้น
				"5%", // วันสิ้นสุด
				"10%", // วัน
				"5%", // วัน
				"7%", // วันสิ้นสุด
				"5%", // รวม (วัน)
				"11%", // ผ่านไปแล้ว
				"*", // คอลัมน์สุดท้ายขยายเต็มพื้นที่ที่เหลือ
			],
			body: [
				[
					{
						text: "ค่าก่อสร้างตามสัญญา",
						bold: true,
						alignment: "center",
						fillColor: "#90EE90", // Light green color
						border: [true, true, true, true],
					},
					{
						text: "74,600,000.00 บาท",
						border: [true, true, true, true],
						fillColor: "#90EE90", // Light green color
						alignment: "center",
					},
					{
						text: "สัญญาก่อสร้าง",
						bold: true,
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
						colSpan: 3,
						rowSpan: 2,
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y
					},
					{},
					{},
					{
						text: "ต่อสัญญา",
						bold: true,
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
						colSpan: 3,
						rowSpan: 2,
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y
					},
					{},
					{},
					{
						text: "ระยะเวลา (วัน)",
						bold: true,
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
						colSpan: 2,
						rowSpan: 2,
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y
					},
					{},
					{
						text: "ผู้จัดการงานก่อสร้าง",
						bold: true,
						alignment: "center",
						fillColor: "#D8BFD8", // Light green color
						border: [true, true, true, true],
					},
					{
						text: "นายอุดร เครือคำ",
						border: [true, true, true, true],
						fillColor: "#D8BFD8", // Light green color
					},
				],
				[
					{
						text: "งานเพิ่ม-ลด",
						bold: true,
						fillColor: "#90EE90", // Light green color
						border: [true, true, true, true],
					},
					{
						text: "449,703.70 บาท",
						border: [true, true, true, true],
						fillColor: "#90EE90", // Light green color
						alignment: "center",
					},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{},
					{
						text: "ผู้จัดการสนาม",
						bold: true,
						fillColor: "#D8BFD8", // Light green color
						border: [true, true, true, true],
					},
					{
						text: "นายกชกร ณ นคร",
						border: [true, true, true, true],
						fillColor: "#D8BFD8", // Light green color
					},
				],
				[
					{
						text: "รวมค่าก่อสร้าง",
						bold: true,
						fillColor: "#90EE90", // Light green color
						border: [true, true, true, true],
					},
					{
						text: "75,049,703.70 บาท",
						border: [true, true, true, true],
						fillColor: "#90EE90", // Light green color
						alignment: "center",
					},
					{
						text: "เริ่มต้น",
						bold: true,
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y
						border: [true, true, true, true],
					},
					{
						text: "สิ้นสุด",
						bold: true,
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y

						border: [true, true, true, true],
					},
					{
						text: "วัน",
						bold: true,
						alignment: "center",
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y

						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "วัน",
						bold: true,
						alignment: "center",
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y

						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "สิ้นสุด",
						bold: true,
						alignment: "center",
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y

						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "รวม (วัน)",
						bold: true,
						alignment: "center",
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y

						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "ผ่านไปแล้ว",
						bold: true,
						alignment: "center",
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y

						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "ล่วงเลย",
						bold: true,
						alignment: "center",
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y

						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},

					{
						text: "ผู้ควบคุมงาน",
						bold: true,
						fillColor: "#D8BFD8", // Light green color
						border: [true, true, true, true],
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y
					},
					{
						text: "นายพสิษฐ์ อ่อนน้อม",
						border: [true, true, true, true],
						fillColor: "#D8BFD8", // Light green color
						margin: [0, 10], // [Left/Right, Top/Bottom] ปรับค่าให้กึ่งกลางแนว Y
					},
				],
				[
					{
						text: "ค่าปรับ (ล่าสุด)",
						bold: true,
						fillColor: "#90EE90", // Light green color
						border: [true, true, true, true],
					},
					{
						text: "อัตราร้อยละ 0.05 ของราคางานจ้าง",
						border: [true, true, true, true],
						fillColor: "#90EE90", // Light green color
						alignment: "center",
					},
					{
						text: "30 พ.ย.61",
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "30 พ.ย.61",
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "540",
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "540",
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "30 พ.ย.61",
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "540",
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "-",
						bold: true,
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						border: [true, true, true, true],
					},
					{
						text: "-",
						bold: true,
						alignment: "center",
						fillColor: "#FFB6C1", // Light pink color
						color: "#FF0000", // Red color
						border: [true, true, true, true],
					},
					{
						text: "",
						fillColor: "#D8BFD8", // Light green color
					},
					{
						text: "",
						fillColor: "#D8BFD8", // Light green color
					},
				],
			],
		},
	},
];

const content3 = [
	{
		width: "100%",
		table: {
			widths: ["25%", "12%", "7%", "18%", "6%", "*"],
			body: [
				[
					{
						text: "ผลการดำเนินงาน ณ วันที่ 30 มิถุนายน 2567",
						bold: true,
						alignment: "center",
						colSpan: 6,
						fillColor: "#00008B", // Dark blue color
						color: "white",
					},
					{},
					{},
					{},
					{},
					{},
				],
				[
					{
						rowSpan: 2,
						width: "100%",
						stack: [
							{
								columns: [
									{ text: "ค่าก่อสร้างตามสัญญา", bold: true },
									{ text: "74,600,000.00 บาท", alignment: "right" },
								],
							},
							{
								columns: [
									{ text: "เบิกจ่ายสะสม (ตามงวดงาน)", bold: true },
									{ text: "74,600,000.00 บาท", alignment: "right" },
								],
							},
							{
								columns: [
									{ text: "คงเหลือ", bold: true },
									{ text: "- บาท", alignment: "right" },
								],
							},
						],
					},
					{
						rowSpan: 4,
						stack: [
							{
								width: "100%",
								columns: [
									{ text: "แผนงาน", bold: true },
									{ text: "100.00 %", alignment: "right" },
								],
							},
							{
								width: "100%",
								columns: [
									{ text: "ผลงาน", bold: true },
									{ text: "100.00 %", alignment: "right" },
								],
							},
							{
								width: "100%",
								columns: [
									{ text: "เร็ว/ช้า", bold: true },
									{ text: "100.00 %", alignment: "right" },
								],
							},
						],
					},
					{
						fillColor: "#90EE90", // Light green color
						text: "งานที่ต้องติดตาม",
						colSpan: 2,
						alignment: "center",
						bold: true,
					},
					{},
					{
						text: "ผลการ\nดำเนิน\nงาน",
						bold: true,
						alignment: "center",
						rowSpan: 2,
						border: [true, true, true, false],
						fillColor: "#FFFFE0", // Light yellow color
					},
					{
						fillColor: "#FFFFE0", // Light yellow color
						rowSpan: 3,
						stack: [
							{
								text: "-รผว.(ปรีดา) อนุมัติเรื่องแก้ไขเปลื้่ยนแปลงงานปั้มน้ำและงวดค่าปรับ  เมื่อวันที่ 27 มี.ค.67",
							},
							{ text: "-ตรวจรับงานงวดสุดท้าย เมื่อวันที่ 28-29 มี.ค.67" },
							{ text: "ส่งมอบ ชต. เมื่อวันที่ 11 เม.ย 67" },
						],
					},
				],
				[
					{},
					{},
					{
						fillColor: "#90EE90", // Light green color
						text: "งานไฟฟ้า",
						alignment: "center",
						bold: true,
					},
					{
						fillColor: "#90EE90", // Light green color
						text: "แล้วเสร็จ",
						bold: true,
					},
					{

                    },
					{},
				],
				[
					{
						rowSpan: 2,
						width: "100%",
						stack: [
							{
								columns: [
									{ text: "เงินอุดหนุนปี 66", bold: true },
									{ text: "- บาท", alignment: "right" },
								],
							},
							{
								columns: [
									{ text: "เบิกจ่าย (ไม่รวมงานล่วงหน้า)", bold: true },
									{ text: "- บาท", alignment: "right" },
								],
							},
							{
								columns: [
									{ text: "คงเหลือ", bold: true },
									{ text: "- บาท", alignment: "right" },
								],
							},
						],
					},
					{},
					{
						text: "งานประปา",
						alignment: "center",
						bold: true,
						fillColor: "#90EE90", // Light green color
					},
					{
						text: "แล้วเสร็จ",
						bold: true,
						fillColor: "#90EE90", // Light green color
					},
					{
						border: [false, false, false, false],
						text: "",
                        fillColor: "#FFFFE0", // Light yellow color

					},
					{},
				],
				[
					{},
					{},
					{
						text: "งานโฉนด",
						alignment: "center",
						bold: true,
						fillColor: "#90EE90", // Light green color
					},
					{
						text: "แล้วเสร็จ (ได้รับโฉนดวันที่ 6 ธ.ค.66",
						bold: true,
						fillColor: "#90EE90", // Light green color
					},
					{
                        fillColor: "#FFFFE0", // Light yellow color

						text: "แนวทาง\nแก้ไข",
						bold: true,
						alignment: "center",
					},
					{
                        fillColor: "#FFFFE0", // Light yellow color
                        text:'',
                    },
				],
			],
		},
	},
];

const content4 = [
	{
		table: {
			widths: ["25%", "25%", "25%", "25%"],
			body: [
				[
					{
						height: 500,
						text: "",
					},
					{
						height: 500,
						text: "",
					},
					{
						height: 500,
						text: "",
					},
					{
						height: 500,
						text: "",
					},
				],
			],
		},
		layout: {
			paddingTop: function () {
				return 85;
			}, // เพิ่มระยะห่างด้านบน
			paddingBottom: function () {
				return 85;
			}, // เพิ่มระยะห่างด้านล่าง
		},
	},
];

function Page171268() {
	const { generatePDF } = useCreatePDFController({
		content: [...content1, ...content2, ...content3, ...content4],
		fileName: "171218.pdf",
		pageOrientation: "landscape",
		pageMargins: [10, 10, 10, 10], // [left, top, right, bottom]
	});

	useEffect(() => {
		generatePDF();
	}, []);

	return (
		<>
			<h2 className="text-3xl text-center font-bold py-4">คบ.10</h2>;
			<iframe
				id="pdfViewer"
				style={{ width: "100%", height: "1200px" }}
			/>
		</>
	);
}

export default Page171268;
