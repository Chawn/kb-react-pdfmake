import { useEffect } from 'react';
import { useCreatePDFController } from '../hooks/useCreatePDFController';

const _________VALUE__________ = 'test text';

const content2 = [
	{
		marginTop: 10,
		layout: 'noBorders',
		table: {
			headerRows: 1, // ระบุว่าแถวแรกเป็น header
			widths: [
				'auto', // กำหนดความกว้างของคอลัมน์ 1
				'15%', // กำหนดความกว้างของคอลัมน์ 2
				'auto', // กำหนดความกว้างของคอลัมน์ 3
				'*', // กำหนดความกว้างของคอลัมน์ 4
				'25%', // กำหนดความกว้างของคอลัมน์ 4
				'20%', // กำหนดความกว้างของคอลัมน์ 4
			],
			body: [
				// Header row

				// เริ่มใส่ข้อมูลจาก content1 เข้าไปในแต่ละคอลัมน์
				[
					{
						text: 'แบบฟอร์มการจ่ายเงินตามสัญญาแบบปรับราคาได้ (ค่า K)',
						colSpan: 6,
						alignment: 'center',
						bold: true,
						lineHeight: 0.8,
						marginBottom: 6,
					},
					{},
					{},
					{},
					{},
					{},
				],
				[
					{ text: 'ก่อสร้าง', alignment: 'right', lineHeight: 0.8 },
					{ text: _________VALUE__________, colSpan: 3 },
					{},
					{},
					{
						text: '1.ส่งงานงวดสุดท้าย: _______',
						colSpan: 2,
					},
					{},
				],
				[
					{ text: 'สัญญาเลขที่', alignment: 'right' },
					{ text: _________VALUE__________ },
					{ text: 'วันที่เปิดของประกวดราคา', alignment: 'right' },
					{ text: _________VALUE__________ },
					{
						text: '2.ครบ 90 วันนับจากวันส่งมอบงาน งวดสุดท้าย: _______',
						colSpan: 2,
					},
					{},
				],
				[
					{ text: 'ลงวันที่', alignment: 'right' },
					{ text: _________VALUE__________ },
					{ text: 'ผู้รับจ้าง', alignment: 'right' },
					{ text: _________VALUE__________ },
					{
						text: '3.ค่า K เปลื่ยนเเปลง ±: _______',
						colSpan: 2,
					},
					{},
				],
				[
					{ text: 'สัญญาเริ่ม', alignment: 'right' },
					{ text: _________VALUE__________ },
					{ text: 'สิ้นสุด (เดิม)', alignment: 'right' },
					{ text: _________VALUE__________ },
					{},
					{},
				],
			],
		},
	},
];

const content3 = [
	{
		marginTop: 10,
		layout: 'noBorders',
		table: {
			headerRows: 1, // ระบุว่าแถวแรกเป็น header
			widths: ['50%', '50%'],
			body: [
				[
					{
						layout: 'noBorders',
						table: {
							headerRows: 1, // ระบุว่าแถวแรกเป็น header
							widths: [
								'7%', // กำหนดความกว้างของคอลัมน์ 1
								'15%', // กำหนดความกว้างของคอลัมน์ 2
								'auto', // กำหนดความกว้างของคอลัมน์ 3
								'*', // กำหนดความกว้างของคอลัมน์ 4
							],
							body: [
								[
									{
										text: 'ต่ออายุสัญญาครั้งที่ 1',
										alignment: 'right',
										colSpan: 2,
									},
									{},
									{ text: 'วันสิ้นสุด (ใหม่)', alignment: 'right' },
									{ text: _________VALUE__________ },
								],

								[
									{
										text: 'ต่ออายุสัญญาครั้งที่ 2',
										alignment: 'right',
										colSpan: 2,
									},
									{},
									{ text: 'วันสิ้นสุด (ใหม่)', alignment: 'right' },
									{ text: _________VALUE__________ },
								],

								[
									{
										text: 'ต่ออายุสัญญาครั้งที่ 3',
										alignment: 'right',
										colSpan: 2,
									},
									{},
									{ text: 'วันสิ้นสุด (ใหม่)', alignment: 'right' },
									{ text: _________VALUE__________ },
								],
							],
						},
					},

					{
						layout: 'noBorders',
						table: {
							headerRows: 1, // ระบุว่าแถวแรกเป็น header
							widths: [
								'auto', // กำหนดความกว้างของคอลัมน์ 4
								'auto', // กำหนดความกว้างของคอลัมน์ 4
								'auto', // กำหนดความกว้างของคอลัมน์ 3
								'auto', // กำหนดความกว้างของคอลัมน์ 3
							],
							body: [
								[
									{
										text: '(ลงชื่อ)',
										alignment: 'right',
									},
									{
										text: '________________________',
										alignment: 'center',
									},
									{
										text: 'ผู้คำนวณ',
										alignment: 'right',
									},
									{
										text: 'ตำแหน่ง_______________________',
										alignment: 'right',
									},
								],
								[
									{},
									{
										text: '(________________________)',
										alignment: 'center',
									},
									{},
									{},
								],
								[
									{
										text: '(ลงชื่อ)',
										alignment: 'right',
									},
									{
										text: '________________________',
										alignment: 'center',
									},
									{
										text: 'ผู้ตรวจสอบ',
										alignment: 'right',
									},
									{
										text: 'ตำแหน่ง_______________________',
										alignment: 'right',
									},
								],
								[
									{},
									{
										text: '(________________________)',
										alignment: 'center',
									},
									{},
									{},
								],
							],
						},
					},
				],
			],
			layout: 'noBorders',
		},
	},
];

const content4 = [
	{
		marginTop: 10,
		table: {
			headerRows: 1, // ระบุว่าแถวแรกเป็น header
			widths: [
				'5%',
				'20%',
				'10%',
				'10%',
				'10%',
				'7.5%',
				'7.5%',
				'10%',
				'10%',
				'10%',
			],
			body: [
				[
					{
						text: 'งวดงาน\nที่',
						style: 'tableHeader',
						alignment: 'center',
						marginTop: 5,
					},
					{
						text: 'รายการ',
						style: 'tableHeader',
						alignment: 'center',
						marginTop: 10,
					},
					{
						text: 'ค่างาน\nจำนวนเงิน',
						style: 'tableHeader',
						alignment: 'center',
						marginTop: 5,
					},
					{
						text: 'หักค่างาน\nที่ไม่อยู่ในข่าย\nค่า K (บาท)',
						style: 'tableHeader',
						alignment: 'center',
					},
					{
						text: 'ค่างานที่ได้\nรับการพิจารณา\nค่า K (บาท)',
						style: 'tableHeader',
						alignment: 'center',
					},
					{
						text: 'สูตร\nค่า K',
						style: 'tableHeader',
						alignment: 'center',
						marginTop: 5,
					},
					{
						text: 'คำนวณ\nค่า K',
						style: 'tableHeader',
						alignment: 'center',
						marginTop: 5,
					},
					{
						text: 'ส่วนแตกต่าง\n± 4%\nคงเหลือ',
						style: 'tableHeader',
						alignment: 'center',
					},
					{
						text: 'เพิ่มขึ้น / ลดลง\nคิดเป็นเงิน\n(บาท)',
						style: 'tableHeader',
						alignment: 'center',
					},
					{
						text: 'หมายเหตุ',
						style: 'tableHeader',
						alignment: 'center',
						marginTop: 10,
					},
				],
				// เพิ่มข้อมูลในแต่ละแถวในรูปแบบ array
				...Array.from({ length: 4 }, (_, i) => [
					{ text: '', margin: [0, 10, 0, 0] },
					{ text: '', margin: [0, 10, 0, 0] },
					{ text: '', margin: [0, 10, 0, 0] },
					{ text: '', margin: [0, 10, 0, 0] },
					{ text: '', margin: [0, 10, 0, 0] },
					{ text: '', margin: [0, 10, 0, 0] },
					{ text: '', margin: [0, 10, 0, 0] },
					{ text: '', margin: [0, 10, 0, 0] },
					{ text: '', margin: [0, 10, 0, 0] },
					{ text: '', margin: [0, 10, 0, 0] },
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
	},
];

export default function PageKb2() {
	const { generatePDF } = useCreatePDFController({
		content: [...content2, ...content3, ...content4],
		fileName: 'form-k1.pdf',
		pageOrientation: 'landscape',
	});

	useEffect(() => {
		generatePDF();
	}, []);

	return (
		<>
			<iframe id='pdfViewer' style={{ width: '100%', height: '1200px' }} />
		</>
	);
}
