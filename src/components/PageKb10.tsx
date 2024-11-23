import { useEffect } from "react";
import { useCreatePDFController } from "../hooks/useCreatePDFController";

const content1 = [
  {
    table: {
      widths: ["50%", "50%"],
      body: [
        [
          {
            text: "การเคหะแห่งชาติ",
            bold: true,
            alignment: "center",
            colSpan: 2,
            border: [true, true, true, false],
          },
          {},
        ],
        [
          {
            columns: [
              {
                text: "โครงการ",
                bold: true,
                width: "auto",
              },
              {
                text: "_".repeat(50),
                width: "auto",
              },
            ],
            border: [true, false, false, false],
          },
          {
            columns: [
              {
                text: "สัญญาฉบับเลขที่",
                bold: true,
                alignment: "right",
              },
              {
                text: "_".repeat(50),
                width: "auto",
              },
            ],
            border: [false, false, true, false],
          },
        ],
        [
          {
            columns: [
              {
                text: "ผู้รับจ้าง",
                bold: true,
                width: "auto",
              },
              {
                text: "_".repeat(50),
                width: "auto",
              },
            ],
            border: [true, false, false, false],
          },
          {
            columns: [
              {
                text: "ส่งมอบงานครั้งที่",
                bold: true,
                alignment: "right",
              },
              {
                text: "_".repeat(50),
                width: "auto",
              },
            ],
            border: [false, false, true, false],
          },
        ],
        [
          {
            columns: [
              {
                text: "เริ่มสัญญาวันที่",
                bold: true,
                width: "auto",
              },
              {
                text: "_".repeat(16),
                width: "auto",
              },
              {
                text: " สิ้นสุดสัญญาวันที่ ",
                bold: true,
                width: "auto",
              },
              {
                text: "_".repeat(15),
                width: "auto",
              },
            ],
            border: [true, false, false, false],
          },
          {
            columns: [
              {
                text: "ผลงานระหว่างวันที่",
                bold: true,
                alignment: "right",
              },
              {
                text: "_".repeat(50),
                width: "auto",
              },
            ],
            border: [false, false, true, false],
          },
        ],
        [
          {
            columns: [
              {
                text: "ระยะเวลาดำเนินการ",
                bold: true,
                width: "auto",
              },
              {
                text: "_".repeat(38) + "วัน",
                width: "auto",
              },
            ],
            border: [true, false, false, false],
          },
          {
            text: "",
            border: [false, false, true, false],
          },
        ],
        [
          {
            columns: [
              {
                text: "ค่าก่อสร้าง",
                bold: true,
                width: "auto",
              },
              {
                text: "_".repeat(48),
                width: "auto",
                marginBottom: 10,
              },
            ],
            border: [true, false, false, true],
          },
          {
            text: "",
            border: [false, false, true, true],
          },
        ],
      ],
    },
  },
];

const content2 = [
  {
    layout: {
      paddingLeft: () => 0, // ลด Padding ซ้ายเป็น 0
      paddingRight: () => 0, // ลด Padding ขวาเป็น 0
      paddingTop: () => 0, // ลด Padding บนเป็น 0
      paddingBottom: () => 0, // ลด Padding ล่างเป็น 0
    },

    table: {
      widths: ["35%", "30%", "25%", "10%"],
      body: [
        [
          {
            marginTop: 10,
            marginBottom: 10,
            border: [true, true, true, false],
            stack: [
              {
                marginLeft: 5,
                text: "บริษัท ได้ดำเนินการแล้วเสร็จตามรายละเอียดงวดงาน\nและขอเบิกจ่ายตามที่เสนอ",
              },
              {
                marginLeft: 5,
                layout: "noBorders",
                marginTop: 10,
                width: "100%",
                table: {
                  widths: [30, 140, 60],
                  body: [
                    [
                      {
                        text: "ลงชื่อ",
                      },
                      {
                        text: "_".repeat(25),
                      },
                      {
                        text: "ผู้รับมอบอำนาจ",
                      },
                    ],
                    [
                      {},
                      {
                        text: "(" + "_".repeat(25) + ")",
                      },
                      {},
                    ],
                    [
                      {},
                      {
                        text: "วันที่" + "_".repeat(22),
                      },
                      {},
                    ],
                    [
                      {},
                      {
                        text: "_".repeat(25),
                      },
                      {},
                    ],
                  ],
                },
              },
              {
                marginTop: 30,
                table: {
                  widths: [256],
                  body: [
                    [
                      {
                        border: [false, true, false, false],
                        stack: [
                          {
                            text: "ตรวจสอบแล้ว ถูกต้องตามที่บริษัทเสนอมา",
                          },
                          {
                            layout: "noBorders",
                            marginTop: 10,
                            width: "100%",
                            table: {
                              widths: [30, 140, 60],
                              body: [
                                [
                                  {
                                    text: "ลงชื่อ",
                                  },
                                  {
                                    text: "_".repeat(25),
                                  },
                                  {
                                    text: "ผู้จัดการสนาม",
                                  },
                                ],
                                [
                                  {},
                                  {
                                    text: "(" + "_".repeat(25) + ")",
                                  },
                                  {},
                                ],
                                [
                                  {},
                                  {
                                    text: "วันที่" + "_".repeat(22),
                                  },
                                  {},
                                ],
                              ],
                            },
                          },
                          {
                            layout: "noBorders",
                            marginTop: 10,
                            width: "100%",
                            table: {
                              widths: [30, 140, 80],
                              body: [
                                [
                                  {
                                    text: "ลงชื่อ",
                                  },
                                  {
                                    text: "_".repeat(25),
                                  },
                                  {
                                    text: "ผู้จัดการงานก่อสร้าง",
                                  },
                                ],
                                [
                                  {},
                                  {
                                    text: "(" + "_".repeat(25) + ")",
                                  },
                                  {},
                                ],
                                [
                                  {},
                                  {
                                    text: "วันที่" + "_".repeat(22),
                                  },
                                  {},
                                ],
                              ],
                            },
                          },
                        ],
                      },
                    ],
                  ],
                },
              },
            ],
          },
          {
            rowSpan: 2,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 5,
            stack: [
              {
                text:
                  "ผู้รับจ้างได้ดำเนินการไปโดยเรียบร้อย ตามสัญญารายละเอียด\nและแนปรูป ตั้งแต่วันที่" +
                  "_".repeat(20),
              },
              {
                marginTop: 30,
                text:
                  "คณะกรรมการได้ตรวจรับงานเมื่อวันที่" +
                  "_".repeat(17) +
                  "\nและเห็นพร้อมกันว่าควรรับงานและจ่ายเงินจำนวนนี้ให้ผู้รับ\nจ้างได้",
              },
              {
                layout: "noBorders",
                marginTop: 30,
                width: "100%",
                table: {
                  widths: [30, 110, 70],
                  body: [
                    [
                      {
                        text: "ลงชื่อ",
                      },
                      {
                        text: "_".repeat(22),
                      },
                      {
                        text: "ประธานกรรมการ",
                      },
                    ],
                    [
                      {},
                      {
                        text: "(" + "_".repeat(21) + ")",
                      },
                      {},
                    ],
                  ],
                },
              },
              {
                layout: "noBorders",
                marginTop: 30,
                width: "100%",
                table: {
                  widths: [30, 110, 70],
                  body: [
                    [
                      {
                        text: "ลงชื่อ",
                      },
                      {
                        text: "_".repeat(22),
                      },
                      {
                        text: "กรรมการ",
                      },
                    ],
                    [
                      {},
                      {
                        text: "(" + "_".repeat(21) + ")",
                      },
                      {},
                    ],
                  ],
                },
              },
              {
                layout: "noBorders",
                marginTop: 30,
                width: "100%",
                table: {
                  widths: [30, 110, 70],
                  body: [
                    [
                      {
                        text: "ลงชื่อ",
                      },
                      {
                        text: "_".repeat(22),
                      },
                      {
                        text: "กรรมการ",
                      },
                    ],
                    [
                      {},
                      {
                        text: "(" + "_".repeat(21) + ")",
                      },
                      {},
                    ],
                  ],
                },
              },
            ],
          },
          {
            marginTop: 20,
            marginBottom: 10,
            table: {
              widths: [257],
              body: [
                [
                  {
                    stack: [
                      "ก. จำนวนเงินทั้งหมดที่จะต้องจ่ายถึงงวดนี้",
                      "ข. จำนวนเงินทั้งหมดที่ได้จ่ายจนถึงงวดที่แล้ว",
                    ],
                    border: [false, false, false, true],
                  },
                ],
                [
                  {
                    stack: ["ค. จำนวนเงินที่จะจ่ายในงวดนี้"],
                    border: [false, false, false, true],
                  },
                ],
                [
                  {
                    stack: [
                      {
                        text: "ค่างานเพิ่ม-ลด",
                        bold: true,
                      },
                      {
                        text: " ",
                        bold: true,
                      },
                      {
                        text: " ",
                        bold: true,
                      },

                      {
                        text: " ",
                        bold: true,
                      },
                      {
                        text: " ",
                        bold: true,
                      },
                      {
                        text: " ",
                        bold: true,
                      },
                    ],
                    border: [false, false, false, true],
                  },
                ],
                [
                  {
                    stack: [
                      {
                        text: "การหักเงิน",
                        bold: true,
                      },
                      "ง. หักเงินค่าจ้างล่วงหน้า ________ % ของผล\nงานงวดนี้",
                      "- หักเงินคืน ________ % ของผลงานงวดนี้",
                      "- ได้หักเงินคืนจนถึงงวดที่แล้ว",
                      "- จำนวนเงินทั้งหมดที่หักคืนจนถึงงวดนี้",
                      "- จำนวนเงินที่จะต้องหักต่อไป",
                      "- จำนวนเงินที่จะต้องหักออกทั้งหมด",
                      "จ. หักเงินประกันผลงาน _____ % ของโครงการใน\nงวดนี้",
                      "ฉ. อื่นๆ",
                    ],
                    border: [false, false, false, true],
                  },
                ],
              ],
            },

            border: [true, true, true, false],
          },
          {
            table: {
              widths: [66],
              body: [
                [
                  {
                    text: "บาท",
                    alignment: "center",
                    bold: true,
                    border: [false, false, false, true],
                  },
                ],
              ],
            },
            border: [true, true, true, false],
          },
        ],
        [
          {
            text: "",
            border: [true, false, true, true],
          },
          {},
          {
            marginLeft: 5,
            marginBottom: 5,
            text: "ช. จำนวนเงินสุทธิที่ต้องจ่ายให้แก่ผู้รับจ้างงวดนี้",
            border: [true, false, true, true],
          },
          {
            text: "",
            border: [true, false, true, true],
          },
        ],
      ],
    },
  },
];

export default function PageKb2() {
  const { generatePDF } = useCreatePDFController({
    content: [...content1, ...content2],
    fileName: "form-kb10.pdf",
    // กำหนด Header (มุมขวาบน)
    header: (currentPage, pageCount) => {
      return {
        text: `คบ.10`,
        alignment: "right",
        margin: [0, 20, 40, 0], // [left, top, right, bottom]
      };
    },
    pageOrientation: "landscape",
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
