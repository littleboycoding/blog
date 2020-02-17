const UserinfoStyle = () => (
  <style jsx>{`
    .userContainer {
      border-bottom: 1px dashed #ccc;
      padding: 15px 50px 15px 50px;
      display: flex;
    }
    .userImage {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 5px;
    }
    .userInfo {
      margin-left: 10px;
      width: calc(100% - 160px);
    }

    @media screen and (max-width: 900px) {
      .userContainer {
        display: block;
      }
      .userInfo {
        width: 100%;
        margin-left: 0;
      }
      .userImage {
        margin-bottom: 20px;
      }
    }
  `}</style>
);

export default UserinfoStyle;
