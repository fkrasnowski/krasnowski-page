const HeaderBox = ({ children, style }) => (
  <div className={style}>
    {children}
    {/* //Check nav-header-box.module.css
    <style jsx>{`
      .header {
        top: 0px;
        color: black;
        background-color: pink;
        height: fit-content;
        width: 100%;
        text-align: center;
        padding-bottom: 50px;
        padding-top: 70px;
        margin-top: -50px;
        border-bottom-left-radius: 50% 20%;
        border-bottom-right-radius: 50% 50%;
      }
    `}</style>
     */}
  </div>
);

export default HeaderBox;
