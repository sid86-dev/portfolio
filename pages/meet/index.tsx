import Head from "next/head";
import React, { FC, useContext, useRef, useState } from "react";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Wrapper } from "../../components/Wrapper";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import { Context } from "../../context/store";
import { AppStoreContext } from "../../types";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ModalForm } from "../../components/Meet/Modal";
import AlertDialog from "../../components/Meet/AlertDialog";

interface IProps {
  token: string | null;
}

const Meet: FC<IProps> = ({ token }) => {
  const form = useRef<HTMLFormElement>(null);
  const [state] = useContext<AppStoreContext>(Context);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rysvt0k",
        "template_reubxa5",
        // @ts-ignore
        form.current,
        "pbo5LNVpK8MRMNHMh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Wrapper>
      <Head>
        <title>Sid86 | Meet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container py-5 px-md-5">
        <h1>Let&apos;s Connect !</h1>
        {/* zoom meeting */}
        <div className="row my-5">
          <div className="col-md-5">
            <div className="container h-100 text-center border-dashed p-3 rounded">
              {/* Modal */}
              <ModalForm setIsSuccess={setIsSuccess} token={token} />
              {isSuccess && <AlertDialog />}
              <h3 className="mt-md-5">Set up a video meeeting</h3>
              {/* zoom redirect button */}
              <a href={process.env.ZOOM_PUBLISH_URL}>
                <div className="my-5">
                  <button className="btn btn-primary rounded-5 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="60px"
                      height="60px"
                      className=""
                    >
                      <circle cx="24" cy="24" r="20" fill="#2196f3" />
                      <path
                        fill="#fff"
                        d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
                      />
                      <polygon fill="#fff" points="37,31 31,27 31,21 37,17" />
                    </svg>{" "}
                    Continue with Zoom
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-1 d-flex justify-content-center align-items-center">
            <h2 className="my-4">OR</h2>
          </div>
          {/* send email */}
          <div className="col-md-6">
            <div className="container border-dashed px-4 rounded">
              <h3 className="py-2">
                Send a message <MailOutlineIcon fontSize="large" />{" "}
              </h3>
              <form
                ref={form}
                onSubmit={(e: React.ChangeEvent<HTMLFormElement>) =>
                  sendEmail(e)
                }
              >
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    name="from_email"
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    name="message"
                  ></textarea>

                  <button
                    className={`btn ${
                      state.isDark ? "btn-outline-light" : "btn-outline-dark"
                    } mt-4 px-5`}
                    type="submit"
                    onClick={() => sendEmail}
                  >
                    Send <SendIcon fontSize="small" className="mb-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider" />

      <Footer />
    </Wrapper>
  );
};

export default Meet;

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  const { code } = context.query as { code: string };
  const authorization =
    process.env.NEXT_PUBLIC_ZOOM_CLIENT_ID +
    ":" +
    process.env.ZOOM_CLIENT_SECRET;

  console.log(authorization);
  console.log(code);

  let buff = new Buffer(authorization);
  let base64data = buff.toString("base64");

  var data = {
    code: code,
    grant_type: "authorization_code",
    redirect_uri: "http://localhost:3000/meet",
  };

  var config = {
    method: "post",
    url: "https://zoom.us/oauth/token",
    headers: {
      Authorization: `Basic ${base64data}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    const { access_token } = response.data;
    console.log(access_token);
    return {
      props: {
        token: access_token as string,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        token: null,
      },
    };
  }
};
