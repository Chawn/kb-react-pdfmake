import { useEffect } from 'react';
import { useCreatePDFController } from '../hooks/useCreatePDFController';

const section1 = [
	{
		table: {
			widths: ['100%'],
			body: [
				[
					{
						table: {
							widths: ['auto', '*', 'auto', '*', 'auto', '*'],
							body: [
								[
									{
										text: 'สรุปรายงานผลการดำเนินงาน',
										style: 'header',
										alignment: 'center',
										colSpan: 6,
									},
									{},
									{},
									{},
									{},
									{},
								],
								[
									{
										text: 'โครงการ',
										alignment: 'right',
										colSpan: 2,
									},
									{},
									{
										text: '___________________________',
										alignment: 'left',
										colSpan: 4,
									},
									{},
									{},
									{},
								],
								[
									{ text: 'รายงานประจำเดือน:', bold: true },
									{ text: 'พฤศจิกายน 2567' },
									{ text: 'ตั้งแต่วันที่:', bold: true },
									{ text: '21 พ.ย. 2567' },
									{ text: 'ถึงวันที่:', bold: true },
									{ text: '21 พ.ย. 2567' },
								],
							],
						},
						layout: 'noBorders',
						margin: [0, 0, 0, 1],
					},
				],
			],
		},
	},
];

const section2 = [
	{
		table: {
			widths: ['100%'],
			body: [
				[
					{
						table: {
							widths: ['auto', 'auto', '*'],
							body: [
								[
									{
										text: 'โครงการ',
										alignment: 'left',
									},
									{
										text: ':',
										alignment: 'right',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
								],
								// สถานที่ตั้ง
								[
									{
										text: 'สถานที่ตั้ง',
										alignment: 'left',
									},
									{
										text: ':',
										alignment: 'right',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
								],
								// ลักษณะโครงการ
								[
									{
										text: 'ลักษณะโครงการ',
										alignment: 'left',
									},
									{
										text: ':',
										alignment: 'right',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
								],
							],
						},
						layout: 'noBorders',
						margin: [0, 0, 0, 1],
					},
				],
			],
		},
	},
];

const section3 = [
	{
		table: {
			widths: ['100%'],
			body: [
				[
					{
						table: {
							widths: ['auto', '*', 'auto', '*'],
							body: [
								[
									{
										text: 'ผู้รับจ้าง',
										alignment: 'left',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
									{
										text: 'วันลงนามในสัญญา',
										alignment: 'left',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
								],
								[
									{
										text: 'สัญญาเลขที่',
										alignment: 'left',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
									{
										text: 'วันเริ่มนับสัญญา',
										alignment: 'left',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
								],
								[
									{
										text: 'ค่าก่อสร้างตามสัญญา',
										alignment: 'left',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
									{
										text: 'วันสิ้นสุดสัญญา',
										alignment: 'left',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
								],
								[
									{
										text: 'อัตราค่าปรับวันละ',
										alignment: 'left',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
									{
										text: 'ระยะเวลาตามสัญญา',
										alignment: 'left',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
								],
							],
						},
						layout: 'noBorders',
						margin: [0, 0, 0, 0],
						border: [true, false, true, false],
					},
				],
				[
					{
						table: {
							widths: ['2%', '15%', '20%', 'auto', 'auto', '*'],
							body: [
								// ต่อสัญญาครั้งที่ 1 | ... | วัน  |  เนื่องจาก | ...
								// ต่อสัญญาครั้งที่ 2 | ... | วัน  |  เนื่องจาก | ...
								// ต่อสัญญาครั้งที่ 3 | ... | วัน  |  เนื่องจาก | ...
								//                          |  รวมระยะเวลาหลังต่อสัญญา | ...
								//                          |  วันสิ้นสุดสัญญา(รวมวันที่ต่อสัญญา)| ...
								[
									{},
									{
										text: 'ต่อสัญญาครั้งที่ 1',
										alignment: 'left',
									},
									{
										text: '________________',
										alignment: 'left',
									},
									{
										text: 'วัน',
										alignment: 'left',
									},
									{
										text: 'เนื่องจาก',
										alignment: 'left',
									},
									{
										text: '________________',
										alignment: 'left',
									},
								],
								[
									{},
									{
										text: 'ต่อสัญญาครั้งที่ 2',
										alignment: 'left',
									},
									{
										text: '________________',
										alignment: 'left',
									},
									{
										text: 'วัน',
										alignment: 'left',
									},
									{
										text: 'เนื่องจาก',
										alignment: 'left',
									},
									{
										text: '________________',
										alignment: 'left',
									},
								],
								[
									{},
									{
										text: 'ต่อสัญญาครั้งที่ 3',
										alignment: 'left',
									},
									{
										text: '________________',
										alignment: 'left',
									},
									{
										text: 'วัน',
										alignment: 'left',
									},
									{
										text: 'เนื่องจาก',
										alignment: 'left',
									},
									{
										text: '________________',
										alignment: 'left',
									},
								],
							],
						},
						layout: 'noBorders',
						margin: [0, 0, 0, 0],
						border: [true, false, true, false],
					},
				],
				[
					{
						table: {
							widths: ['22%', 'auto', 'auto', '*'],
							body: [
								[
									{},
									{
										text: 'รวมระยะเวลาหลังต่อสัญญา',
										alignment: 'right',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
									{
										text: 'วัน',
										alignment: 'left',
									},
								],
								[
									{},
									{
										text: 'วันสิ้นสุดสัญญา(รวมวันที่ต่อสัญญา)',
										alignment: 'right',
									},
									{
										text: '___________________________',
										alignment: 'left',
									},
									{},
								],
							],
						},
						layout: 'noBorders',
						margin: [0, 0, 0, 1],
						border: [true, false, true, true],
					},
				],
			],
		},
		layout: {
			defaultBorder: false,
		},
	},
];

const section4 = [
	{
		table: {
			widths: ['100%'],
			body: [
				[
					{
						table: {
							widths: ['23%', '15%', '10%', 'auto', '15%', '*'],
							body: [
								[
									{
										text: 'ระยะเวลาก่อสร้างตามสัญญา',
										alignment: 'left',
									},
									{
										text: '______________',
										alignment: 'left',
									},
									{
										text: 'วัน',
										alignment: 'left',
									},
									{
										text: '',
										alignment: 'left',
									},
									{},
									{},
								],
								[
									{
										text: 'ระยะเวลาก่อสร้างที่ผ่านมา',
										alignment: 'left',
									},
									{
										text: '______________',
										alignment: 'left',
									},
									{
										text: 'วัน',
										alignment: 'left',
									},
									// เหลือเวลา ... วัน
									{
										text: 'เหลือเวลา',
										alignment: 'left',
									},
									{
										text: '______________',
										alignment: 'left',
									},
									{
										text: 'วัน',
										alignment: 'left',
									},
								],
								[
									{
										text: 'ส่งงานแล้ว',
										alignment: 'left',
									},
									{
										text: '______________',
										alignment: 'left',
									},
									{
										text: 'งวด',
										alignment: 'left',
									},
									{
										text: 'เป็นเงิน',
										alignment: 'left',
									},
									{
										text: '______________',
										alignment: 'left',
									},
									{
										text: 'บาท',
										alignment: 'left',
									},
								],
								[
									{
										text: 'เหลืองานอีก',
										alignment: 'left',
									},
									{
										text: '______________',
										alignment: 'left',
									},
									{
										text: 'งวด',
										alignment: 'left',
									},
									{
										text: 'เป็นเงิน',
										alignment: 'left',
									},
									{
										text: '______________',
										alignment: 'left',
									},
									{
										text: 'บาท',
										alignment: 'left',
									},
								],
								[
									{
										text: 'สรุปผลงานตามแผนควรทำได้',
										alignment: 'left',
									},
									{
										text: '______________',
										alignment: 'left',
									},
									{
										text: '%',
										alignment: 'left',
									},
									{
										text: 'ทำได้จริง',
										alignment: 'left',
									},
									{
										text: '______________',
										alignment: 'left',
									},
									{
										text: '%',
										alignment: 'left',
									},
								],

								[
									{},
									{},
									{},
									{
										text: 'งานเร็ว (+) / ช้า (-)',
										alignment: 'left',
									},
									{
										text: '______________',
										alignment: 'left',
									},
									{
										text: '%',
										alignment: 'left',
									},
								],
								[
									{
										text: `(ครั้งที่แล้วทำได้ ${'____________'}% งานเร็ว (+) / ช้า (-) ${'____________'} % กว่าแผนงาน)`,
										alignment: 'center',
										colSpan: 6,
									},
									{},
									{},
									{},
									{},
									{},
								],
							],
						},
						layout: 'noBorders',
						margin: [0, 0, 0, 1],
					},
				],
			],
		},
	},
];

const section5 = [
	{
		table: {
			widths: ['100%'],
			body: [
				[
					{
						table: {
							widths: ['33%', '33%', '33%'],
							body: [
								[
									{
										text: 'ประมาณการส่งงานล่วงหนน้า 3 เดือน',
										alignment: 'left',
										colSpan: 3,
									},
									{},
									{},
								],
								[
									{
										text: `เดือนที่ 1: ${'____________'} บาท`,
										alignment: 'left',
									},
									{
										text: `เดือนที่ 2: ${'____________'} บาท`,
										alignment: 'left',
									},
									{
										text: `เดือนที่ 3: ${'____________'} บาท`,
										alignment: 'left',
									},
								],
							],
						},
						layout: 'noBorders',
						margin: [0, 0, 0, 1],
					},
				],
			],
		},
	},
];

const section6 = [
	{
		table: {
			widths: ['100%'],
			body: [
				[
					{
						table: {
							widths: ['100%'],
							body: [
								[
									{
										text: `ลักษณะงานที่ดำเนินการเดือนนี้: _______________________________________________________________________________ ${'________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________'}`,
										alignment: 'left',
									},
								],
							],
						},
						layout: 'noBorders',
						margin: [0, 0, 0, 1],
					},
				],
			],
		},
	},
];

const section7 = [
	{
		table: {
			widths: ['100%'],
			body: [
				[
					{
						table: {
							widths: ['33%', '33%', '33%'],
							body: [
								[
									{
										text: 'ปัญหาและอุปสรรค',
										alignment: 'left',
										border: [false, false, true, false],
									},

									{
										text: 'การแก้ไข',
										alignment: 'left',
										border: [false, false, true, false],
									},

									{
										text: 'สรุปผลการแก้ไข',
										alignment: 'left',
									},
								],
								[
									{
										text: '_____________________________________________',
										alignment: 'left',
										border: [false, false, true, false],
									},

									{
										text: '_____________________________________________',
										alignment: 'left',
										border: [false, false, true, false],
									},

									{
										text: '_____________________________________________',
										alignment: 'left',
									},
								],
							],
						},
						layout: {
							defaultBorder: false,
						},
						margin: [0, 0, 0, 1],
					},
				],
			],
		},
	},
];

const section8 = [
	{
		table: {
			widths: ['100%'],
			body: [
				[
					{
						table: {
							widths: ['25%', '25%', '25%', '25%'],
							body: [
								[
									{
										text: 'ทำและรายงานโดย',
										alignment: 'left',
										colSpan: 4,
									},
									{},
									{},
									{},
								],
								[
									{
										text: `ผู้ควบคุมงาน`,
										alignment: 'left',
									},
									{
										text: '____________',
										alignment: 'left',
									},
									{
										text: 'ผู้จัดการงานก่อสร้าง',
										alignment: 'right',
									},
									{
										text: '____________',
										alignment: 'left',
									},
								],
								[
									{},
									{
										text: '(____________)',
										alignment: 'left',
									},
									{},
									{
										text: '(____________)',
										alignment: 'left',
									},
								],
								[
									{
										text: `ผู้จัดการสนาม`,
										alignment: 'left',
									},
									{
										text: '____________',
										alignment: 'left',
									},
									{
										text: 'ผู้อำนวยการกอง',
										alignment: 'right',
									},
									{
										text: '____________',
										alignment: 'left',
									},
								],
								[
									{},
									{
										text: '(____________)',
										alignment: 'left',
									},
									{},
									{
										text: '(____________)',
										alignment: 'left',
									},
								],
							],
						},
						layout: 'noBorders',
						margin: [0, 0, 0, 1],
					},
				],
			],
		},
	},
];

const content = [
	...section1,
	...section2,
	...section3,
	...section4,
	...section5,
	...section6,
	...section7,
	...section8,
];

export default function PageKb1() {
	const { generatePDF } = useCreatePDFController({
		content: content,
		fileName: 'form-kb1.pdf',
	});

	useEffect(() => {
		generatePDF();
	}, []);

	return (
		<>
			<h2 className='text-3xl text-center font-bold py-4'>คบ.1</h2>;
			<iframe id='pdfViewer' style={{ width: '100%', height: '1200px' }} />
		</>
	);
}
