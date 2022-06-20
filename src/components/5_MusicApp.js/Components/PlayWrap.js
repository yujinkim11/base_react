import styled from "styled-components";

const SPlayWrap = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const GaugeWrap = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
`;

const Gauge = styled.div`
  width: 10%;
  height: 100%;
  background-color: mediumseagreen;
`;

const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 12px;
  font-weight: 100;
`;

export const PlayWrap = () => {
  return (
    <SPlayWrap>
      <GaugeWrap>
        <Gauge></Gauge>
      </GaugeWrap>
      <TimeWrap>
        <span>00:03</span>
        <span>03:40</span>
      </TimeWrap>
    </SPlayWrap>
  );
};
