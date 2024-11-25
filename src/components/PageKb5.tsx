import { useEffect } from 'react'
import { useCreatePDFController } from '../hooks/useCreatePDFController'

const content = [
    {
        table: {
            widths: ['*'],
            heights: ['auto'],
            margin: [0, 0, 0, 0],
            body: [
                [
                    {
                        stack: [
                            {
                                text: 'คป.5',
                                fontSize: 6,
                                alignment: 'right',
                                bold: true,
                                margin: [0, -15, 0, 10],
                            },
                            // Header
                            {
                                text: 'รายงานสภาพอากาศรายเดือน',
                                fontSize: 12,
                                alignment: 'center',
                                bold: true,
                                margin: [0, -25, 0, 10],
                            },

                            {
                                text: 'โครงการ.............................................................................................',
                                alignment: 'center',
                                fontSize: 10,
                                bold: true,
                                margin: [0, 0, 20, 5],
                            },
                            {
                                text: 'ประจำเดือน.............................',
                                fontSize: 10,
                                alignment: 'center',
                                bold: true,
                                margin: [0, 10, 0, 15],
                            },

                            ///ตารางแสดงรายเดือน
                            {
                                table: {
                                    widths: Array(8).fill('*'),
                                    body: Array(4)
                                        .fill(null) ///ไม่ได้รับค่าไร จึงเติม null
                                        .map((_, rowIndex) =>
                                            Array(8)
                                                .fill(null)
                                                .map((_, colIndex) => {
                                                    const dayNumber = (
                                                        rowIndex * 8 +
                                                        colIndex +
                                                        1
                                                    )
                                                        .toString()
                                                        .padStart(2, '0')
                                                    const totalDays = 31

                                                    if (
                                                        rowIndex * 8 +
                                                            colIndex +
                                                            1 <=
                                                        totalDays
                                                    ) {
                                                        return {
                                                            stack: [
                                                                {
                                                                    text: dayNumber,
                                                                    fontSize: 6,
                                                                    alignment:
                                                                        'right',
                                                                    margin: [
                                                                        0, 30,
                                                                        5, 0,
                                                                    ],
                                                                },
                                                            ],
                                                            ///เส้นขอบตาราง
                                                            border: [
                                                                true,
                                                                true,
                                                                true,
                                                                true,
                                                            ],
                                                            height: 40,
                                                        }
                                                    } else {
                                                        return {
                                                            text: '',
                                                            /// เส้นขอบตาราง
                                                            border: [
                                                                true,
                                                                true,
                                                                true,
                                                                true,
                                                            ],
                                                            height: 40,
                                                        }
                                                    }
                                                })
                                        ),
                                },
                                layout: {
                                    hLineWidth: function (i, node) {
                                        return 0.5
                                    },
                                    vLineWidth: function (i, node) {
                                        return 0.5
                                    },
                                },
                            },

                            // Footer
                            {
                                margin: [0, 25, 0, 0],
                                columns: [
                                    {
                                        width: 'auto',
                                        stack: [
                                            {
                                                text: 'มืดครื้ม',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [25, -10, 0, 0],
                                            },
                                        ],
                                    },
                                    {
                                        width: 'auto',
                                        stack: [
                                            {
                                                text: 'ฝนตกประปราย',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [85, -10, 0, 0],
                                            },
                                        ],
                                    },
                                    {
                                        width: 'auto',
                                        stack: [
                                            {
                                                text: 'ฝนตกปานกลาง',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [85, -10, 0, 0],
                                            },
                                        ],
                                    },
                                    {
                                        width: 'auto',
                                        stack: [
                                            {
                                                text: 'ฝนตกหนัก',
                                                fontSize: 10,
                                                bold: true,
                                                margin: [85, -10, 0, 0],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                        margin: [20, 20, 20, 20],
                    },
                ],
            ],
        },
        layout: {
            hLineWidth: function (i, node) {
                return 1
            },
            vLineWidth: function (i, node) {
                return 1
            },
        },
    },
]

const PageKb5 = () => {
    const { generatePDF } = useCreatePDFController({
        content: [...content],
        fileName: 'form-kb5.pdf',
        pageMargins: [20, 250, 20, 50], //จัดกึ่งกลาง
    })

    useEffect(() => {
        generatePDF()
    }, [])
    return (
        <>
            <h2 className="text-3xl text-center font-bold py-4">คบ.5</h2>;
            <iframe
                id="pdfViewer"
                style={{ width: '100%', height: '1200px' }}
            />
        </>
    )
}

export default PageKb5
