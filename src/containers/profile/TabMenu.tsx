import styled from "@emotion/styled";

interface TabMenuProps {
  currentTab: number;
  setClickTab: (currentTab: number) => void;
}

const TabMenu = ({ currentTab, setClickTab }: TabMenuProps) => {
  return (
    <Container>
      <TabWrapper>
        <Menu isActive={currentTab === 0} onClick={() => setClickTab(0)}>
          내가 쓴
        </Menu>
        <Menu isActive={currentTab === 1} onClick={() => setClickTab(1)}>
          투표 참여
        </Menu>
      </TabWrapper>
    </Container>
  );
};

export default TabMenu;

const Container = styled.div`
  padding: 0 25px;
`;

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 20px 0;
  border-radius: 24px;

  background-color: ${props => props.theme.colors.gray500};
`;

const Menu = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: calc(100% - 5px);
  margin: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: ${props =>
    props.isActive
      ? props.theme.typography.paragraphs.bold
      : props.theme.typography.paragraphs.default};
  color: ${props =>
    props.isActive ? props.theme.colors.gray500 : props.theme.colors.white};
  background-color: ${props =>
    props.isActive ? props.theme.colors.green200 : "transparent"};
  cursor: pointer;
`;
