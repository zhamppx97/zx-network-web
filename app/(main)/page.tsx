'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useRef, useState } from 'react';
import Link from 'next/link';

import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import { LayoutContext } from '../../layout/context/layoutcontext';
import { NodeRef } from '@/types';
import { classNames } from 'primereact/utils';

const LandingPage = () => {
    const [isHidden, setIsHidden] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const menuRef = useRef<HTMLElement | null>(null);

    const toggleMenuItemClick = () => {
        setIsHidden((prevState) => !prevState);
    };

    return (
        <div className="surface-0 flex justify-content-center">
            <div id="home" className="landing-wrapper overflow-hidden">
                <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
                    <Link href="/" className="flex align-items-center">
                        <span className="text-900 font-medium text-2xl line-height-3 mr-8">ZX Network</span>
                    </Link>
                    <StyleClass nodeRef={menuRef as NodeRef} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <i ref={menuRef} className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"></i>
                    </StyleClass>
                    <div className={classNames('align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2', { hidden: isHidden })} style={{ top: '100%' }}>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                            <li>
                                <a href="#zxscan" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>ZXScan</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#ecosystem" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Ecosystem</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#features" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Features</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#development" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Development</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>About</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                            <Button label="Get Started" rounded className="border-none ml-5 font-light line-height-2 bg-blue-500 text-white"></Button>
                        </div>
                    </div>
                </div>

                <div
                    id="hero"
                    className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                    style={{
                        background: 'linear-gradient(to right top, #ffeef7, #f9ecf7, #f3eaf7, #ede9f6, #e7e7f4, #e2e7f4, #dee7f3, #dae7f1, #d7e8f0, #d5e9ef, #d3eaec, #d3ebe9)',
                    }}
                >
                    <div className="mx-4 md:mx-8 mt-0 md:mt-4">
                        <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                            Interoperability (การเชื่อมต่อระหว่างบล็อกเชน)
                        </h1>
                        <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                            Security (ความปลอดภัย)
                        </h1>
                        <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                            Scalability (ความสามารถในการขยายตัว)
                        </h1>
                        <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700"></p>

                        <h1 className="text-4xl font-bold text-gray-900 line-height-2">
                            เชื่อมต่อทุกบล็อกเชนอย่างราบรื่นด้วยเทคโนโลยีใหม่ล่าสุด
                        </h1>
                        <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">แพลตฟอร์มของเรานำเสนอเทคโนโลยีที่ทันสมัยที่สุดเพื่อการเชื่อมต่อและการทำงานร่วมกันระหว่างบล็อกเชนต่างๆ ซึ่งเป็นการเปิดโอกาสให้ทุกบล็อกเชนสามารถสื่อสารและแลกเปลี่ยนข้อมูลกันได้อย่างราบรื่น ไม่ว่าจะเป็นบล็อกเชนสาธารณะหรือบล็อกเชนส่วนตัว</p>


                        <div className="flex justify-content-center md:justify-content-end">

                        </div>
                    </div>
                </div>

                <div id="features" className="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
                    <div className="grid justify-content-center">
                        <div className="col-12 text-center mt-8 mb-4">
                            <h2 className="text-900 font-normal mb-2"></h2>
                            <span className="text-600 text-2xl"></span>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '300px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-yellow-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >

                                    </div>
                                    <h5 className="mb-2 text-900">โปรโตคอลการเชื่อมต่อที่ยืดหยุ่น</h5>
                                    <span className="text-600">แพลตฟอร์มของเรารองรับโปรโตคอลการเชื่อมต่อที่หลากหลาย ทำให้สามารถปรับใช้กับบล็อกเชนต่างๆ ได้อย่างง่ายดาย</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '300px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-cyan-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >

                                    </div>
                                    <h5 className="mb-2 text-900">การประมวลผลข้ามบล็อกเชน</h5>
                                    <span className="text-600">สามารถทำการประมวลผลธุรกรรมและการโต้ตอบระหว่างบล็อกเชนต่างๆ ได้อย่างมีประสิทธิภาพ</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '300px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-indigo-200"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >

                                    </div>
                                    <h5 className="mb-2 text-900">ความปลอดภัยระดับสูง</h5>
                                    <span className="text-600">Relay Chain ช่วยเสริมความปลอดภัยให้กับทุกบล็อกเชนที่เชื่อมต่อ โดยมีการตรวจสอบและประมวลผลธุรกรรมอย่างรอบคอบ</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '300px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-bluegray-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >

                                    </div>
                                    <h5 className="mb-2 text-900">การประสานงานที่ราบรื่น</h5>
                                    <span className="text-600">Relay Chain ทำหน้าที่ประสานงานและประมวลผลธุรกรรมระหว่างบล็อกเชนต่างๆ ทำให้การทำงานของระบบเป็นไปอย่างราบรื่นและมีประสิทธิภาพ</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '300px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-orange-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >

                                    </div>
                                    <h5 className="mb-2 text-900">การเลือก Validator อย่างยุติธรรม</h5>
                                    <span className="text-600">ผู้ใช้สามารถเสนอชื่อและเลือก Validator ที่พวกเขาเชื่อถือ ทำให้การเลือก Validator เป็นไปอย่างโปร่งใสและยุติธรรม</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '300px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-pink-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >

                                    </div>
                                    <h5 className="mb-2 text-900">ประสิทธิภาพในการประมวลผล</h5>
                                    <span className="text-600">Validator ที่ได้รับการคัดเลือกจะทำหน้าที่ประมวลผลธุรกรรมอย่างมีประสิทธิภาพ ทำให้ระบบสามารถรองรับการทำงานได้อย่างรวดเร็วและมีเสถียรภาพ</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '300px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-teal-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >

                                    </div>
                                    <h5 className="mb-2 text-900">การอัพเกรดอย่างราบรื่น</h5>
                                    <span className="text-600">ผู้ใช้สามารถอัพเกรดระบบได้อย่างต่อเนื่องโดยไม่ต้องทำ Hard Fork ทำให้ระบบมีความเสถียรและปลอดภัย</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '300px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-blue-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >

                                    </div>
                                    <h5 className="mb-2 text-900">การปรับตัวตามเทคโนโลยีใหม่</h5>
                                    <span className="text-600">แพลตฟอร์มของเราสามารถปรับตัวตามเทคโนโลยีใหม่ๆ ได้อย่างรวดเร็ว ทำให้ผู้ใช้ได้รับประสบการณ์ที่ดีที่สุด</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '300px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-purple-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >

                                    </div>
                                    <h5 className="mb-2 text-900">การกระจายอำนาจในระบบ</h5>
                                    <span className="text-600">ระบบของเรามีการกระจายอำนาจอย่างแท้จริง ด้วยการเลือก Validator จากชุมชน ทำให้การประมวลผลธุรกรรมเป็นไปอย่างมีประสิทธิภาพและโปร่งใส</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-12 mt-8 mb-8 p-2 md:p-8"
                            style={{
                                borderRadius: '20px',
                                background: 'linear-gradient(to right top, #ffeef7, #f9ecf7, #f3eaf7, #ede9f6, #e7e7f4, #e2e7f4, #dee7f3, #dae7f1, #d7e8f0, #d5e9ef, #d3eaec, #d3ebe9)'
                            }}
                        >
                            <div className="flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0">
                                <h3 className="text-gray-900 mb-2">แพลตฟอร์มบล็อกเชนของเรามีคุณสมบัติที่โดดเด่นและมีประสิทธิภาพสูง</h3>
                                <span className="text-gray-600 text-2xl">ด้วยการเชื่อมต่อและการทำงานร่วมกันระหว่างบล็อกเชนต่างๆ การเสริมความปลอดภัยด้วย Relay Chain การเลือก Validator อย่างยุติธรรมด้วยระบบ Nominated Proof-of-Stake (NPoS)</span>
                                <p className="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4" style={{ maxWidth: '800px' }}>
                                    และการอัพเกรดระบบโดยไม่ต้องทำ Hard Fork เรามุ่งมั่นที่จะสร้างแพลตฟอร์มบล็อกเชนที่มีความเสถียร ปลอดภัย และสามารถรองรับการใช้งานที่หลากหลายอย่างมีประสิทธิภาพ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="highlights" className="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
                    <div className="text-center">
                        <h2 className="text-900 font-normal mb-2"></h2>
                        <span className="text-600 text-2xl"></span>
                    </div>

                    <div className="grid mt-8 pb-2 md:pb-8">
                        <div className="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0" style={{ borderRadius: '8px' }}>

                        </div>

                        <div className="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                            <div
                                className="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end"
                                style={{
                                    width: '4.2rem',
                                    height: '4.2rem',
                                    borderRadius: '10px'
                                }}
                            >
                                <i className="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">เชื่อมต่อทุกบล็อกเชนอย่างราบรื่นด้วยเทคโนโลยีใหม่ล่าสุด</h2>
                            <span className="text-700 text-2xl line-height-3 ml-0 md:ml-2" style={{ maxWidth: '650px' }}>
                                แพลตฟอร์มของเรานำเสนอเทคโนโลยีที่ทันสมัยที่สุดเพื่อการเชื่อมต่อและการทำงานร่วมกันระหว่างบล็อกเชนต่างๆ ซึ่งเป็นการเปิดโอกาสให้ทุกบล็อกเชนสามารถสื่อสารและแลกเปลี่ยนข้อมูลกันได้อย่างราบรื่น ไม่ว่าจะเป็นบล็อกเชนสาธารณะหรือบล็อกเชนส่วนตัว
                            </span>
                        </div>
                    </div>

                    <div className="grid my-8 pt-2 md:pt-8">
                        <div className="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                            <div
                                className="flex align-items-center justify-content-center bg-cyan-200 align-self-center lg:align-self-start"
                                style={{
                                    width: '4.2rem',
                                    height: '4.2rem',
                                    borderRadius: '10px'
                                }}
                            >
                                <i className="pi pi-fw pi-desktop text-5xl text-cyan-700"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">ความปลอดภัยสูงสุดด้วยระบบ Relay Chain</h2>
                            <span className="text-700 text-2xl line-height-3 mr-0 md:mr-2" style={{ maxWidth: '650px' }}>
                                ระบบของเรามีความปลอดภัยระดับสูงด้วยการใช้ Relay Chain เพื่อให้บล็อกเชนทั้งหมดที่เชื่อมต่อมีความปลอดภัยร่วมกัน Relay Chain ทำหน้าที่เป็นตัวกลางในการประสานงานและการทำธุรกรรมระหว่างบล็อกเชนต่างๆ พร้อมทั้งเสริมความปลอดภัยให้กับระบบโดยรวม
                            </span>
                        </div>

                        <div className="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-cyan-100 p-0" style={{ borderRadius: '8px' }}>

                        </div>
                    </div>

                    <div className="grid mt-8 pb-2 md:pb-8">
                        <div className="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0" style={{ borderRadius: '8px' }}>

                        </div>

                        <div className="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                            <div
                                className="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end"
                                style={{
                                    width: '4.2rem',
                                    height: '4.2rem',
                                    borderRadius: '10px'
                                }}
                            >
                                <i className="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">ประสิทธิภาพและความยุติธรรมกับ Nominated Proof-of-Stake (NPoS)</h2>
                            <span className="text-700 text-2xl line-height-3 ml-0 md:ml-2" style={{ maxWidth: '650px' }}>
                                ด้วยระบบ Nominated Proof-of-Stake (NPoS) แพลตฟอร์มของเราสามารถเลือก Validator ที่มีความยุติธรรมและมีประสิทธิภาพ ช่วยให้การทำงานของระบบมีความโปร่งใสและน่าเชื่อถือ ผู้ใช้สามารถเสนอชื่อและเลือก Validator ที่พวกเขาเชื่อถือได้ ทำให้ระบบมีความเป็นประชาธิปไตยและมีการกระจายอำนาจอย่างแท้จริง
                            </span>
                        </div>
                    </div>

                    <div className="grid my-8 pt-2 md:pt-8">
                        <div className="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                            <div
                                className="flex align-items-center justify-content-center bg-cyan-200 align-self-center lg:align-self-start"
                                style={{
                                    width: '4.2rem',
                                    height: '4.2rem',
                                    borderRadius: '10px'
                                }}
                            >
                                <i className="pi pi-fw pi-desktop text-5xl text-cyan-700"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">การอัพเกรดโดยไม่ต้องทำ Hard Fork</h2>
                            <span className="text-700 text-2xl line-height-3 mr-0 md:mr-2" style={{ maxWidth: '650px' }}>
                                แพลตฟอร์มของเราสามารถอัพเกรดได้อย่างต่อเนื่องโดยไม่ต้องทำ Hard Fork ทำให้ระบบสามารถปรับตัวได้ตามเทคโนโลยีใหม่ๆ อย่างรวดเร็วและลดความเสี่ยงที่อาจเกิดขึ้นจากการทำ Hard Fork
                            </span>
                        </div>

                        <div className="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-cyan-100 p-0" style={{ borderRadius: '8px' }}>

                        </div>
                    </div>

                    <hr />
                </div>

                <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
                    <div className="grid justify-content-between">
                        <div className="col-12 md:col-2" style={{ marginTop: '-1.5rem' }}>
                            <Link href="/" className="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                                <span className="font-medium text-3xl text-900">ZX Network</span>
                            </Link>
                        </div>

                        <div className="col-12 md:col-10 lg:col-7">
                            <div className="grid text-center md:text-left">
                                <div className="col-12 md:col-3">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Ecosystem</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Community</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Jobs</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Wallets</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Dapps</a>
                                </div>

                                <div className="col-12 md:col-3 mt-4 md:mt-0">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Resources</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Get Started</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Learn</a>
                                    <a className="line-height-3 text-xl block cursor-pointer text-700">Case Studies</a>
                                </div>

                                <div className="col-12 md:col-3 mt-4 md:mt-0">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Legal</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Brand Policy</a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Privacy Policy</a>
                                    <a className="line-height-3 text-xl block cursor-pointer text-700">Terms of Service</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
