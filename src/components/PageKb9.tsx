import { useEffect } from 'react';
import { useCreatePDFController } from '../hooks/useCreatePDFController';

const page1 = [
  // Header
  {
    text: 'รายละเอียดโครงการ',
    style: 'header',
    alignment: 'center',
    margin: [0, 0, 0, 20],
  },
  // Table for rows
  {
    table: {
      widths: ['10%', '20%', '*', '10%'],
      body: [
        ...[
          ['ชื่อโครงการ'],
          ['สถานที่ตั้ง'],
          [''],
          ['ขนาดที่ดินโครงการ'],
          ['ลักษณะงาน'],
          ['ประกอบด้วย'],
          [''],
          [''],
          [''],
          ['สัญญาฉบับเลขที่'],
          ['ลงวันที่'],
          ['วันที่เริ่มนับสัญญา'],
          ['วันที่สิ้นสุดสัญญา'],
        ].map((label) => [
          {
            text: '',
            margin: [0, 10, 0, 10],
          }, // เพิ่ม margin เพื่อปรับความสูง
          {
            text: label,
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '_____________________________________________________',
            margin: [0, 10, 0, 10],
          },
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
        ]),
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
  // Table for rows
  {
    table: {
      widths: ['10%', '20%', 'auto', '*'],
      body: [
        // Additional rows with special formats
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'ระยะเวลาก่อสร้าง',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'วัน',
            bold: true,
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'ค่าก่อสร้างรวม',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'บาท',
            bold: true,
            alignment: 'left',
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'ค่าปรับวันละ',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'บาท',
            bold: true,
            alignment: 'left',
            margin: [0, 10, 0, 10],
          },
        ],
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
  // Table for rows
  {
    table: {
      widths: ['10%', '20%', '*', '10%'],
      body: [
        ...[['ผู้รับจ้าง'], ['บริหารโครงการโดย']].map((label) => [
          {
            text: '',
            margin: [0, 10, 0, 10],
          }, // เพิ่ม margin เพื่อปรับความสูง
          {
            text: label,
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '_____________________________________________________',
            margin: [0, 10, 0, 10],
          },
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
        ]),
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
];

const page2 = [
  // Header
  {
    text: 'โครงการ ________________________________________________',
    style: 'header',
    alignment: 'center',
    margin: [0, 0, 0, 20],
  },
  // Table for rows
  {
    table: {
      widths: ['10%', '*', '10%'],
      body: [
        ...[['คณะกรรมการผู้ตรวจการจ้าง']].map((label) => [
          {
            text: '',
            margin: [0, 10, 0, 10],
          }, // เพิ่ม margin เพื่อปรับความสูง
          {
            //ขนาดฟ้อน
            fontSize: 12,
            text: label,
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
        ]),
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
  {
    table: {
      widths: ['10%', '*', '30%', '10%'],
      body: [
        ...[['ประธานกรรมการ'], ['กรรมการ'], ['กรรมการ']].map((label) => [
          {
            text: '',
            margin: [0, 5, 0, 5],
          }, // เพิ่ม margin เพื่อปรับความสูง
          {
            text: '_____________________________________________________',
            margin: [0, 5, 0, 5],
            alignment: 'left',
          },
          {
            text: label,
            bold: true,
            margin: [0, 5, 0, 5],
          },
          {
            text: '',
            margin: [0, 5, 0, 5],
          },
        ]),
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
  // Table for rows
  {
    table: {
      widths: ['10%', '*', '10%'],
      body: [
        ...[['บริหารโครงการโดย']].map((label) => [
          {
            text: '',
            margin: [0, 10, 0, 10],
          }, // เพิ่ม margin เพื่อปรับความสูง
          {
            //ขนาดฟ้อน
            fontSize: 12,
            text: label,
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
        ]),
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
  {
    table: {
      widths: ['10%', '*', '30%', '10%'],
      body: [
        ...[
          ['ผจก.'],
          ['ผู้จัดการงานก่อสร้าง'],
          ['ผู้จัดการสนามและผู้ควบคุมงาน'],
          ['ช่างควบคุมงาน กคช.'],
        ].map((label) => [
          {
            text: '',
            margin: [0, 5, 0, 5],
          }, // เพิ่ม margin เพื่อปรับความสูง
          {
            text: '_____________________________________________________',
            margin: [0, 5, 0, 5],
            alignment: 'left',
          },
          {
            alignment: 'left',
            text: label,
            bold: true,
            margin: [0, 5, 0, 5],
          },
          {
            text: '',
            margin: [0, 5, 0, 5],
          },
        ]),
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
  // Table for rows
  {
    table: {
      widths: ['10%', '*', '10%'],
      body: [
        ...[['ผู้ร่วมดำเนินการ']].map((label) => [
          {
            text: '',
            margin: [0, 10, 0, 10],
          }, // เพิ่ม margin เพื่อปรับความสูง
          {
            //ขนาดฟ้อน
            fontSize: 12,
            text: label,
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
        ]),
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
  {
    table: {
      widths: ['10%', '*', '30%', '10%'],
      body: [
        ...[[''], [''], [''], [''], [''], ['']].map((label) => [
          {
            text: '',
            margin: [0, 5, 0, 5],
          }, // เพิ่ม margin เพื่อปรับความสูง
          {
            text: '_____________________________________________________',
            margin: [0, 5, 0, 5],
            alignment: 'left',
          },
          {
            alignment: 'left',
            text: label,
            bold: true,
            margin: [0, 5, 0, 5],
          },
          {
            text: '',
            margin: [0, 5, 0, 5],
          },
        ]),
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
  // Table for rows
  {
    table: {
      widths: ['10%', '*'],
      body: [
        ...[
          [
            'ผู้ควบคุมงานก่อสร้าง(CONSULTANTS)(ในกรณีมีบริษัทที่ปรึกษา ควบคุมงานแทน กคช.',
          ],
        ].map((label) => [
          {
            text: '',
            margin: [0, 10, 0, 10],
          }, // เพิ่ม margin เพื่อปรับความสูง
          {
            //ขนาดฟ้อน
            fontSize: 12,
            text: label,
            bold: true,
            margin: [0, 10, 0, 10],
          },
        ]),
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
  {
    table: {
      widths: ['10%', '*', '30%', '10%'],
      body: [
        ...[[''], [''], [''], [''], ['']].map((label) => [
          {
            text: '',
            margin: [0, 5, 0, 5],
          }, // เพิ่ม margin เพื่อปรับความสูง
          {
            text: '_____________________________________________________',
            margin: [0, 5, 0, 5],
            alignment: 'left',
          },
          {
            alignment: 'left',
            text: label,
            bold: true,
            margin: [0, 5, 0, 5],
          },
          {
            text: '',
            margin: [0, 5, 0, 5],
          },
        ]),
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
];

const page3 = [
  // Header
  {
    text: 'สรุปผลงานการก่อสร้างโครงการ',
    style: 'header',
    alignment: 'center',
    margin: [0, 0, 0, 20],
  },
  // Table for rows
  {
    table: {
      widths: ['10%', '30%', 'auto', '*'],
      body: [
        // Additional rows with special formats
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'ค่าก่อสร้างภาค (ก.) การจัดหาที่ดิน',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'บาท',
            bold: true,
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'ค่าก่อสร้างภาค (ข.) งานก่อสร้าง',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'บาท',
            bold: true,
            alignment: 'left',
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'ค่าก่อสร้างรวม',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'บาท',
            bold: true,
            alignment: 'left',
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'ระยะเวลาดำเนินการ',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'วัน',
            bold: true,
            alignment: 'left',
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'เวลาผ่านไปแล้ว',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'วัน',
            bold: true,
            alignment: 'left',
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'เหลือระยะเวลา',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'วัน',
            bold: true,
            alignment: 'left',
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'ตามแผนควรทำได้',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: '%',
            bold: true,
            alignment: 'left',
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'ทำได้จริง',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: '%',
            bold: true,
            alignment: 'left',
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'งานเร็ว (+) ช้า (-) กว่าแผน',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: '%',
            bold: true,
            alignment: 'left',
            margin: [0, 10, 0, 10],
          },
        ],
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },

  // Table for rows
  {
    table: {
      widths: ['10%', '30%', 'auto', 'auto', '10%', 'auto', 'auto', '10%'],
      body: [
        // Additional rows with special formats
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'จำนวนเงินที่ผู้รับจ้างรับไปแล้ว',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'บาท',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: 'คิดเป็น',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '__________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: '%',
            bold: true,
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'จำนวนเงินที่ส่งมอบครั้งนี้',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'บาท',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: 'คิดเป็น',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '__________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: '%',
            bold: true,
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'รวมจำนวนเงินที่ส่งมอบ',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'บาท',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: 'คิดเป็น',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '__________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: '%',
            bold: true,
            margin: [0, 10, 0, 10],
          },
        ],
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'ผลงานที่เบิกจ่ายคงเหลือ',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '____________________________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'บาท',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: 'คิดเป็น',
            bold: true,
            margin: [0, 10, 0, 10],
          },
          {
            text: '__________',
            alignment: 'right',
            margin: [0, 10, 0, 10],
          },
          {
            text: '%',
            bold: true,
            margin: [0, 10, 0, 10],
          },
        ],
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },

  // Table for rows
  {
    table: {
      widths: ['10%', 'auto', 'auto'],
      body: [
        // Additional rows with special formats
        [
          {
            text: '',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'หมายเหตุ',
            //ขีดเส้นใต้
            decoration: 'underline',
            margin: [0, 10, 0, 10],
          },
          {
            text: 'การทำผังบุคคลากรในสนามให้มีรูปถ่ายของทุกท่าน กรรมการตรวจการจ้าง ผู้จัดงานการก่อสร้าง ผู้จัดการสนาม ผู้ควบคุมงาน ตัวแทนผู้รับจ้าง พร้อมภาพถ่ายความก้าวหน้าโครงการ',
            //ขีดเส้นใต้
            margin: [0, 10, 0, 10],
          },
        ],
      ],
    },
    layout: {
      defaultBorder: false, // ลบขอบทั้งหมด
    },
  },
];

export default function PageKb9() {
  const { generatePDF } = useCreatePDFController({
    content: [
      ...page1,
      { text: '', pageBreak: 'after' },
      ...page2,
      { text: '', pageBreak: 'after' },
      ...page3,
    ],
    fileName: 'form-kb9.pdf',
    // กำหนด Header (มุมขวาบน)
    header: (currentPage, pageCount) => {
      return {
        text: `คบ.9`,
        alignment: 'right',
        margin: [0, 20, 40, 0], // [left, top, right, bottom]
      };
    },
    // กำหนด Footer (มุมล่างขวา)
    footer: (currentPage, pageCount) => {
      return {
        text: `${currentPage}`,
        alignment: 'right',
        margin: [0, 0, 40, 20], // [left, top, right, bottom]
      };
    },
  });

  useEffect(() => {
    generatePDF();
  }, []);

  return (
    <>
      <h2 className="text-3xl text-center font-bold py-4">คบ.9</h2>;
      <iframe
        id="pdfViewer"
        style={{ width: '100%', height: '1200px' }}
      />
    </>
  );
}
