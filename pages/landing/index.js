import React, { useContext, useRef, useState } from "react";
import Link from "next/link";
import AppConfig from "../../layout/AppConfig";
import { StyleClass } from "primereact/styleclass";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { LayoutContext } from "../../layout/context/layoutcontext";
import { classNames } from "primereact/utils";
import "primeicons/primeicons.css";
import { signIn } from "next-auth/react";

const LandingPage = () => {
  const [isHidden, setIsHidden] = useState(false);
  const menuRef = useRef();
  const { layoutConfig } = useContext(LayoutContext);
  const toggleMenuItemClick = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <div className='surface-0 flex justify-content-center'>
      <div id='home' className='landing-wrapper overflow-hidden'>
        <div className='py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static'>
          <Link href='/' className='flex align-items-center'>
            <img
              src='/layout/images/pca_logo.svg'
              alt='PCA Logo'
              height='30'
              className='mr-0 lg:mr-2'
            />
          </Link>
          <div style={{ marginLeft: "10px", marginRight: "3px" }}>
            <span className='text-900 font-medium text-2xl line-height-3 mr-8'>
              DocGen
            </span>
          </div>
          <StyleClass
            nodeRef={menuRef}
            selector='@next'
            enterClassName='hidden'
            leaveToClassName='hidden'
            hideOnOutsideClick='true'
          >
            <i
              ref={menuRef}
              className='pi pi-bars text-4xl cursor-pointer block lg:hidden text-700'
            ></i>
          </StyleClass>
          <div
            className={classNames(
              "align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2",
              { hidden: isHidden }
            )}
            style={{ top: "100%" }}
          >
            <ul className='list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer'>
              <li>
                <a
                  href='#home'
                  onClick={toggleMenuItemClick}
                  className='p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3'
                >
                  <span>Home</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href='#features'
                  onClick={toggleMenuItemClick}
                  className='p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3'
                >
                  <span>Features</span>
                  <Ripple />
                </a>
              </li>
            </ul>
            <div className='flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0'>
              <Button
                onClick={() => signIn()}
                label='Login'
                text
                rounded
                className='border-none font-light line-height-2 text-blue-500'
              ></Button>
            </div>
          </div>
        </div>

        <div
          id='hero'
          className='flex flex-column pt-4 px-4 lg:px-8 overflow-hidden'
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)",
            clipPath: "ellipse(150% 87% at 93% 13%)",
          }}
        >
          <div className='mx-4 md:mx-8 mt-0 md:mt-4'>
            <h1 className='text-6xl font-bold text-gray-900 line-height-2'>
              <span className='font-light block'>Fast Reliable Scalable</span>
              Document Generation
            </h1>
            <p className='font-normal text-2xl line-height-3 md:mt-3 text-gray-700'>
              {" "}
              A smart template based-approach to generating custom documents{" "}
            </p>
            <Button
              label='Get Started'
              rounded
              className='text-xl border-none mt-3 bg-blue-500 font-normal line-height-3 px-3 text-white'
            ></Button>
          </div>
          <div className='flex justify-content-center md:justify-content-end'>
            <img
              src='/demo/images/landing/he.svg'
              alt='Hero Image'
              className='w-9 md:w-auto'
              style={{ maxWidth: "60%" }}
            />
          </div>
        </div>

        <div id='features' className='py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8'>
          <div className='grid justify-content-center'>
            <div className='col-12 text-center mt-8 mb-4'>
              <h2 className='text-900 font-normal mb-2'>Our Features</h2>
              <span className='text-600 text-2xl'></span>
            </div>

            <div className='col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0'>
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))",
                }}
              >
                <div
                  className='p-3 surface-card h-full'
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className='flex align-items-center justify-content-center bg-yellow-200 mb-3'
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className='pi pi-fw pi-file text-2xl text-yellow-700'></i>
                  </div>
                  <h5 className='mb-2 text-900'>Document Generation</h5>
                  <span className='text-600'></span>
                </div>
              </div>
            </div>

            <div className='col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0'>
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))",
                }}
              >
                <div
                  className='p-3 surface-card h-full'
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className='flex align-items-center justify-content-center bg-cyan-200 mb-3'
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className='pi pi-fw pi-cog text-2xl text-cyan-700'></i>
                  </div>
                  <h5 className='mb-2 text-900'>Generate documents fast</h5>
                  <span className='text-600'></span>
                </div>
              </div>
            </div>

            <div className='col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0'>
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))",
                }}
              >
                <div
                  className='p-3 surface-card h-full'
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className='flex align-items-center justify-content-center bg-indigo-200'
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className='pi pi-fw pi-folder text-2xl text-indigo-700'></i>
                  </div>
                  <h5 className='mb-2 text-900'>Template Creation</h5>
                  <span className='text-600'></span>
                </div>
              </div>
            </div>

            <div className='col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0'>
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))",
                }}
              >
                <div
                  className='p-3 surface-card h-full'
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className='flex align-items-center justify-content-center bg-bluegray-200 mb-3'
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className='pi pi-fw pi-file-pdf text-2xl text-bluegray-700'></i>
                  </div>
                  <h5 className='mb-2 text-900'>Multiple Output Formats</h5>
                  <span className='text-600'></span>
                </div>
              </div>
            </div>

            <div className='col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0'>
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))",
                }}
              >
                <div
                  className='p-3 surface-card h-full'
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className='flex align-items-center justify-content-center bg-orange-200 mb-3'
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className='pi pi-fw pi-share-alt text-2xl text-orange-700'></i>
                  </div>
                  <h5 className='mb-2 text-900'>Easy Integration</h5>
                  <span className='text-600'></span>
                </div>
              </div>
            </div>

            <div className='col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0'>
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))",
                }}
              >
                <div
                  className='p-3 surface-card h-full'
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className='flex align-items-center justify-content-center bg-pink-200 mb-3'
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className='pi pi-fw pi-envelope text-2xl text-pink-700'></i>
                  </div>
                  <h5 className='mb-2 text-900'>
                    Share document via Mail or SMS
                  </h5>
                  <span className='text-600'></span>
                </div>
              </div>
            </div>

            <div className='col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0'>
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))",
                }}
              >
                <div
                  className='p-3 surface-card h-full'
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className='flex align-items-center justify-content-center bg-teal-200 mb-3'
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className='pi pi-fw pi-inbox text-2xl text-teal-700'></i>
                  </div>
                  <h5 className='mb-2 text-900'>Archiving documents</h5>
                  <span className='text-600'></span>
                </div>
              </div>
            </div>

            <div className='col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0'>
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))",
                }}
              >
                <div
                  className='p-3 surface-card h-full'
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className='flex align-items-center justify-content-center bg-blue-200 mb-3'
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className='pi pi-fw pi-globe text-2xl text-blue-700'></i>
                  </div>
                  <h5 className='mb-2 text-900'>Modern Practices</h5>
                  <span className='text-600'></span>
                </div>
              </div>
            </div>

            <div className='col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0'>
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))",
                }}
              >
                <div
                  className='p-3 surface-card h-full'
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className='flex align-items-center justify-content-center bg-purple-200 mb-3'
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className='pi pi-fw pi-eye text-2xl text-purple-700'></i>
                  </div>
                  <h5 className='mb-2 text-900'>Privacy</h5>
                  <span className='text-600'></span>
                </div>
              </div>
            </div>

            <div
              className='col-12 mt-8 mb-8 p-2 md:p-8'
              style={{
                borderRadius: "20px",
                background:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)",
              }}
            >
              <div className='flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0'>
                <h3 className='text-gray-900 mb-2'>
                  Why choose DocGen as a Solution to generate your document ?
                </h3>
                <p
                  className='text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4'
                  style={{ maxWidth: "800px" }}
                >
                  DocGen offers a highly efficient and automated approach to
                  document generation. By utilizing cutting-edge technology, it
                  minimizes the time and effort required to create professional,
                  error-free documents. With its intuitive interface and robust
                  features, DocGen simplifies the entire process, allowing you
                  to generate documents quickly and easily.
                </p>
              </div>
            </div>

            <div
              className='col-12 mt-8 mb-8 p-2 md:p-8'
              style={{
                borderRadius: "20px",
                background:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)",
              }}
            >
              <div className='flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0'>
                <h3 className='text-gray-900 mb-2'>How it Works ?</h3>
                <div className='mb-3'>
                  <h5 className='text-gray-700'>STEP 1</h5>
                  <h3>Design Your Smart Documents</h3>
                  <p>
                    Design your template within Microsoft Office (Word, Excel,
                    or PowerPoint), with all of its layout and formatting
                    capabilities. Connect one or multiple datasources to your
                    DOCX, XLSX, or PPTX template. Use tags & conditional logic
                    to customize your content inline, creating a smart document
                    with the best Word document generator.
                  </p>
                  <i
                    className='pi pi-arrow-down'
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </div>

                <div className='mb-3'>
                  <h5 className='text-gray-700'>STEP 2</h5>
                  <h3>Generate the Document</h3>
                  <p>
                    Pass the template, datasource(s) and output destination to
                    the engine.Watch Windward merge your template with your data
                    to create the requested document.
                  </p>
                  <i
                    className='pi pi-arrow-down'
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </div>

                <div>
                  <h5 className='text-gray-700'>STEP 3</h5>
                  <h3>Deliver Your Output</h3>
                  <p>
                    Generate your document/report to a wide variety of output
                    formats: DOCX, XLSX, PPTX, PDF, HTML, and many
                    more.Distribute the generated document via your application
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='py-4 px-4 mx-0 mt-8 lg:mx-8'>
          <div className='grid justify-content-between'>
            <div className='col-12 md:col-2' style={{ marginTop: "-1.5rem" }}>
              <Link
                href='/'
                className='flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer'
              >
                <img
                  src='/layout/images/pca_logo.svg'
                  alt='footer sections'
                  height='30'
                  className='mr-2'
                />
                <span className='font-medium text-3xl text-900'>DocGen</span>
              </Link>
            </div>

            <div className='col-12 md:col-10 lg:col-7'>
              <div className='grid text-center md:text-left'>
                <div className='col-12 md:col-3 mt-4 md:mt-0'>
                  <h4 className='font-medium text-2xl line-height-3 mb-3 text-900'>
                    Resources
                  </h4>
                  <a className='line-height-3 text-xl block cursor-pointer mb-2 text-700'>
                    Get Started
                  </a>
                </div>

                <div className='col-12 md:col-3 mt-4 md:mt-0'>
                  <h4 className='font-medium text-2xl line-height-3 mb-3 text-900'>
                    Legal
                  </h4>
                  <a className='line-height-3 text-xl block cursor-pointer text-700'>
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LandingPage.getLayout = function getLayout(page) {
  return (
    <React.Fragment>
      {page}
      <AppConfig simple />
    </React.Fragment>
  );
};

export default LandingPage;
