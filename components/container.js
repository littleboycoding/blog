import dynamic from "next/dynamic";

const UserInfo = dynamic(() => import("./userinfo"), {
  loading: () => "กำลังโหลด Module"
});

function Container(props) {
  return (
    <>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css?family=Kanit&display=swap");
          * {
            font-family: Kanit;
            box-sizing: border-box;
          }
        `}
      </style>
      <style jsx>{`
        .container {
          width: 55%;
          min-width: 900px;
          position: absolute;
          left: 50%;
          top: 60px;
          transform: translateX(-50%);
        }
        .content {
          padding: 0px 30px 0px 30px;
        }
        @media screen and (max-width: 900px) {
          .container {
            width: 100%;
            min-width: 0;
            left: 0;
            top: 0;
            transform: translateX(0);
          }
        }
      `}</style>
      <div className="container">
        <UserInfo />
        <span style={{ clear: "both" }}></span>
        <div className="content">{props.children}</div>
      </div>
    </>
  );
}

export default Container;
