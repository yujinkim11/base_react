import styled from "styled-components";

const SPlayWrap = styled.div``;

const GaugeWrap = styled.div``;

const Gauge = styled.div``;

export const PlayWrap = () => {
  return (
    <SPlayWrap>
      <GaugeWrap>
        <Gauge></Gauge>
      </GaugeWrap>
      <span>00:03</span>
      <span>03:40</span>
    </SPlayWrap>
  );
};
