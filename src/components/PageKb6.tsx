import { useEffect } from 'react'
import { useCreatePDFController } from '../hooks/useCreatePDFController'

const content = [
    {
        text: 'คบ.6',
        style: 'header',
        fontSize: 8,
        margin: [0, 0, 35, -15.5],
        alignment: 'right',
    },
    {
        text: 'ตารางแสดงการอนุมัติใช้วัสดุ-อุปกรณ์ต่างๆที่ใช้ในโครงการ.',
        style: 'header',
        alignment: 'center',
        margin: [0, 0, 0, 5],
    },

    {
        text: 'โครงการ...............................................................................................................................................................................',
        style: 'header',
        alignment: 'center',
        margin: [0, 0, 0, 1],
    },

    {
        table: {
            headerRows: 2,
            widths: [
                '4.5%',
                '28%',
                '7.5%',
                '14%',
                '6%',
                '10%',
                '10%',
                '10%',
                '9.5%',
            ], // ปรับความกว้างคอลัมน์
            body: [
                [
                    {
                        text: 'ลำดับ',
                        alignment: 'center',
                        rowSpan: 2,
                        fontSize: 7,
                        margin: [0, 12, 0, 0],
                        bold: true,
                    },
                    {
                        text: 'รายการ',
                        style: 'tableHeader',
                        alignment: 'center',
                        rowSpan: 2,
                        fontSize: 7,
                        margin: [0, 12, 0, 0],
                        bold: true,
                    },
                    {
                        text: 'มาตราฐานที่\nกำหนด/มอก.',
                        style: 'tableHeader',
                        alignment: 'center',
                        rowSpan: 2,
                        fontSize: 7,
                        margin: [0, 9, 0, 0],
                        bold: true,
                    },
                    {
                        text: 'บริษัท/ห้างร้าน/ซื้อผลิตภัณฑ์',
                        style: 'tableHeader',
                        alignment: 'center',
                        rowSpan: 2,
                        fontSize: 7,
                        margin: [0, 12, 0, 0],
                        bold: true,
                    },
                    {
                        text: 'วันขออนุมัติ',
                        style: 'tableHeader',
                        alignment: 'center',
                        rowSpan: 2,
                        fontSize: 7,
                        margin: [0, 12, 0, 0],
                        bold: true,
                    },
                    {
                        text: 'วันอนุมัติ',
                        style: 'tableHeader',
                        alignment: 'center',
                        colSpan: 2,
                        fontSize: 7,
                        bold: true,
                    },
                    {},
                    {
                        text: 'หนังสือเลขที่',
                        style: 'tableHeader',
                        alignment: 'center',
                        rowSpan: 2,
                        fontSize: 7,
                        margin: [0, 12, 0, 0],
                        bold: true,
                    },
                    {
                        text: 'หมายเหตุ',
                        style: 'tableHeader',
                        alignment: 'center',
                        rowSpan: 2,
                        fontSize: 7,
                        margin: [0, 12, 0, 0],
                        bold: true,
                    },
                ],
                [
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        text: 'อนุมัติ',
                        style: 'subHeader',
                        alignment: 'center',
                        fontSize: 7,
                        bold: true,
                    },
                    {
                        text: 'ไม่อนุมัติ',
                        style: 'subHeader',
                        alignment: 'center',
                        fontSize: 7,
                        bold: true,
                    },
                    {},
                    {},
                ],
                ...Array(30)
                    .fill(0)
                    .map(() => [
                        { text: '', style: 'tableCell' },
                        { text: '', style: 'tableCell' },
                        { text: '', style: 'tableCell' },
                        { text: '', style: 'tableCell' },
                        { text: '', style: 'tableCell' },
                        { text: '', style: 'tableCell' },
                        { text: '', style: 'tableCell' },
                        { text: '', style: 'tableCell' },
                        { text: '', style: 'tableCell' },
                    ]),
            ],
        },
        layout: {
            hLineWidth: function () {
                return 0.8
            },
            vLineWidth: function () {
                return 0.8
            },
            hLineColor: function () {
                return '#000000'
            },
            vLineColor: function () {
                return '#000000'
            },
            paddingTop: function (i) {
                return 5
            },
            paddingBottom: function (i) {
                return 5
            },
        },
    },
]

const PageKb6 = () => {
    const { generatePDF } = useCreatePDFController({
        content: [...content],
        fileName: 'form-kb6.pdf',
        pageOrientation: 'landscape',
        pageMargins: [75, 89, 55, 75],
    })

    useEffect(() => {
        generatePDF()
    }, [])
    return (
        <>
            <h2 className="text-3xl text-center font-bold py-4">คบ.6</h2>;
            <iframe
                id="pdfViewer"
                style={{ width: '100%', height: '1200px' }}
            />
        </>
    )
}

export default PageKb6
