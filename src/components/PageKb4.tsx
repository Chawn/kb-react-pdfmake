import { useEffect } from 'react'
import { useCreatePDFController } from '../hooks/useCreatePDFController'

const content = [
    {
        text: 'ข้อมูลบริหารการเงินโครงการก่อสร้าง.........................................................',
        style: 'header',
        alignment: 'center',
        margin: [0, 0, 0, -10],
    },
    {
        text: `คบ.4`,
        alignment: 'right',
        margin: [0, 0, -35, 0],
    },
    {
        table: {
            widths: [
                '8.5%',
                '8.5%',
                '8.5%',
                '8.5%',
                '8.5%',
                '3.5%',
                '3.5%',
                '5.5%',
                '5.5%',
                '5.5%',
                '5.5%',
                '5.5%',
                '5.5%',
                '5.5%',
                '5.5%',
                '5.5%',
                '5.5%',
            ],
            body: [
                [
                    {
                        text: 'โครงการ',
                        alignment: 'center',
                        style: 'tableHeader',
                        rowSpan: 2,
                        fontSize: 6.5,

                        marginTop: 20,
                        marginButton: 10,
                    },
                    {
                        text: 'ผู้รับจ้าง',
                        alignment: 'center',
                        style: 'tableHeader',
                        rowSpan: 2,
                        fontSize: 6.5,

                        marginTop: 20,
                        marginButton: 10,
                    },
                    {
                        text: 'ค่าก่อสร้าง',
                        alignment: 'center',
                        style: 'tableHeader',
                        rowSpan: 2,
                        fontSize: 6.5,

                        marginTop: 20,
                        marginButton: 10,
                    },
                    {
                        text: 'เริ่มสัญญา',
                        alignment: 'center',
                        style: 'tableHeader',
                        rowSpan: 2,
                        fontSize: 6.5,

                        marginTop: 20,
                        marginButton: 10,
                    },
                    {
                        text: 'สิ้นสุดสัญญา',
                        alignment: 'center',
                        style: 'tableHeader',
                        rowSpan: 2,
                        fontSize: 6.5,

                        marginTop: 20,
                        marginButton: 10,
                    },
                    {
                        text: 'วัน',
                        alignment: 'center',
                        style: 'tableHeader',
                        rowSpan: 2,
                        fontSize: 6.5,

                        marginTop: 20,
                        marginButton: 10,
                    },
                    {
                        text: 'หน่วย',
                        alignment: 'center',
                        style: 'tableHeader',
                        rowSpan: 2,
                        fontSize: 6.5,
                        marginTop: 20,
                        marginButton: 10,
                    },
                    {
                        text: 'ผลงาน',
                        alignment: 'center',
                        style: 'tableHeader',
                        colSpan: 3,
                        fontSize: 6.5,
                        marginTop: 2,
                        marginButton: 10,
                    },
                    {},
                    {},

                    {
                        text: 'ส่งมอบ',
                        alignment: 'center',
                        style: 'tableHeader',
                        colSpan: 3,
                        fontSize: 6.5,
                        marginTop: 2,
                        marginButton: 10,
                    },
                    {},
                    {},

                    {
                        text: 'ประมาณการส่งงานล่วงหน้า 3 เดือน',
                        alignment: 'center',
                        style: 'tableHeader',
                        colSpan: 3,
                        fontSize: 6.5,
                        marginTop: 2,
                        marginButton: -10,
                    },
                    {},
                    {},

                    {
                        text: 'หมายเหตุ',
                        alignment: 'center',
                        style: 'tableHeader',
                        rowSpan: 2,
                        fontSize: 6.5,
                        marginTop: 19,
                        marginButton: 10,
                    },
                ],
                [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        text: 'ตามแผน',
                        alignment: 'center',
                        style: 'tableHeader',
                        fontSize: 6,
                        marginTop: 5,
                        marginButton: 10,
                    },
                    {
                        text: 'ทำได้',
                        alignment: 'center',
                        style: 'tableHeader',
                        fontSize: 6,
                        marginTop: 5,
                        marginButton: 10,
                    },
                    {
                        text: 'เร็ว/ช้า',
                        alignment: 'center',
                        style: 'tableHeader',
                        fontSize: 6,
                        marginTop: 5,
                        marginButton: 10,
                    },
                    {
                        text: 'วันที่',
                        alignment: 'center',
                        style: 'tableHeader',
                        fontSize: 6,
                        marginTop: 5,
                        marginButton: 10,
                    },
                    {
                        text: 'ส่งแล้ว',
                        alignment: 'center',
                        style: 'tableHeader',
                        fontSize: 6,
                        marginTop: 5,
                        marginButton: 10,
                    },
                    {
                        text: 'คงเหลือ',
                        alignment: 'center',
                        style: 'tableHeader',
                        fontSize: 6,
                        marginTop: 5,
                        marginButton: 10,
                    },
                    {
                        text: 'เดือนที่ 1 (บาท)',
                        alignment: 'center',
                        style: 'tableHeader',
                        fontSize: 6,
                    },
                    {
                        text: 'เดือนที่ 2 (บาท)',
                        alignment: 'center',
                        style: 'tableHeader',
                        fontSize: 6,
                    },
                    {
                        text: 'เดือนที่ 3 (บาท)',
                        alignment: 'center',
                        style: 'tableHeader',
                        fontSize: 6,
                    },
                    {},
                ],
                // Rows ของข้อมูล (30 แถว)
                ...Array(30).fill([
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                    { text: '', alignment: 'center' },
                ]),
            ],
        },
        layout: {
            hLineWidth: (i, node) => (i === 0 || i === 1 ? 1 : 0.5),
            vLineWidth: () => 1,
            paddingLeft: () => 5,
            paddingRight: () => 5,
            paddingTop: () => 5,
            paddingBottom: () => 5,
        }, ///เส้นขอบ
    },
]

const PageKb4 = () => {
    const { generatePDF } = useCreatePDFController({
        content: [...content],
        fileName: 'form-kb4.pdf',
        pageMargins: [20, 89, 55, 50],
        pageOrientation: 'landscape', // แสดงผลเป็นแนวนอน
    })
    useEffect(() => {
        generatePDF()
    }, [])
    return (
        <>
            <h2 className="text-3xl text-center font-bold py-4">คบ.4</h2>;
            <iframe
                id="pdfViewer"
                style={{ width: '100%', height: '1200px' }}
            />
        </>
    )
}

export default PageKb4
