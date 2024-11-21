import pdfMake from 'pdfmake/build/pdfmake';

interface Props {
	content: any;
	fileName: string;
}
export const useCreatePDFController = ({ content, fileName }: Props) => {
	const generatePDF = () => {
		pdfMake.fonts = {
			/* --------- TODO ต้องเปลี่ยนจาก cdn เป็นไฟล์ที่เราเก็บไว้ในโปรเจค --------- */
			THSarabunNew: {
				normal:
					'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew-webfont.ttf',
				bold: 'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bold-webfont.ttf',
				italics:
					'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_italic-webfont.ttf',
				bolditalics:
					'https://cdn.jsdelivr.net/npm/font-th-sarabun-new@1.0.0/fonts/THSarabunNew_bolditalic-webfont.ttf',
			},

			Roboto: {
				normal:
					'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
				bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
				italics:
					'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
				bolditalics:
					'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf',
			},
			/* -------------------------------------------------------------------------- */
		};

		const documentDefinition: any = {
			content: content,
			styles: {
				header: { fontSize: 10, bold: true },
				subheader: { fontSize: 12, bold: true, margin: [0, 10, 0, 5] },
				default: { fontSize: 10 },
			},
			defaultStyle: {
				font: 'THSarabunNew',
				fontWeight: 'normal',
				fontSize: 9,
				lineHeight: 0.8,
			},
		};

		/* TODO สร้าง PDF และ Download ---------------------------------------------- */
		/*   pdfMake.createPdf(documentDefinition).download(fileName + '.pdf');   */
		/* -------------------------------------------------------------------------- */

		/* TODO ต้องลบการแสดงใน iframe นี้ออก เมื่องานเสร็จหมด] --------------------------- */
		pdfMake.createPdf(documentDefinition).getBlob(blob => {
			const url = URL.createObjectURL(blob);
			(document.getElementById('pdfViewer') as HTMLIFrameElement).src = url;

			/* TODO เพิ่มการแสดงผลที่ component ที่ต้องการ ----------------------------------- */
			/*   <iframe id="pdfViewer" style={{ width: '100%', height: '1200px' }} />   */
		});
		/* -------------------------------------------------------------------------- */
	};

	return { generatePDF };
};
