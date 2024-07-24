import styled from "@emotion/styled";
import { useState } from "react";
// components
import Modal from "../../components/common/Modal";
import Comment from "../comment/Comment";
// types
import { PostDetailDto } from "../../types/data/post";

interface PostProps {
  post?: PostDetailDto;
  checkLogin: () => boolean;
}

const TotalComments = ({ post, checkLogin }: PostProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (checkLogin()) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <CommentWrapper onClick={openModal}>
        댓글 {post?.commentCount}개 모두 보기
      </CommentWrapper>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} height="600px">
        <Comment post={post} />
      </Modal>
    </>
  );
};

export default TotalComments;

const CommentWrapper = styled.div`
  font-size: ${props => props.theme.typography.disclaimers.default};
  color: ${props => props.theme.colors.gray50};
  cursor: pointer;
`;
