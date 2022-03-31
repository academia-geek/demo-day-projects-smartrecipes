import styled from "styled-components";

export const ContainerAppStyle = styled.div`
  display: flex;
  flex-direction: row; 
  width: 100%;
  .split {
      width: 80%;
     display: flex;
    flex-direction: row;
}

.gutter {
    background-color: red;
    background-repeat: no-repeat;
    background-position: 50%;
}

.gutter.gutter-horizontal {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
    cursor: col-resize;
}
`