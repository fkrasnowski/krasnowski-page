const Flex = ({ dir, align, justify, w, h, children }) => (
  <div>
    {children}
    <style jsx>
      {`
        div {
          display: flex;
          flex-direction: ${dir || 'row'};
          align-items: ${align || 'center'};
          justify-content: ${justify || 'center'};
          width: ${w};
          height: ${h};
        }
      `}
    </style>
  </div>
);
export default Flex;
