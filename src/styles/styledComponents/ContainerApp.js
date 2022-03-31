import styled from "styled-components";

export const ContainerAppStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow-y:scroll;
  .split {
    display: flex;
    flex-direction: row;
}

.gutter {
    background-color: #eee;
    background-repeat: no-repeat;
    background-position: 50%;
}

.gutter.gutter-horizontal {
  
    cursor: col-resize;
}
`