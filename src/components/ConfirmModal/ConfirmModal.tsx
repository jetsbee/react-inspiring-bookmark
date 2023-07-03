import { useEffect, useRef } from "react";
import {
  StyledButton,
  StyledDialog,
  StyledForm,
  StyledMenu,
  StyledP,
} from "./ConfirmModal.styled";
import { Props } from "./ConfirmModal.type";

const ConfirmModal = ({ children, onConfirm, ...props }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <StyledDialog
      ref={dialogRef}
      {...props}
      onClose={
        onConfirm !== undefined
          ? (e) => onConfirm(Boolean(e.currentTarget.returnValue))
          : props.onClose
      }
    >
      <StyledForm>
        <StyledP>Are you sure?</StyledP>
        <StyledMenu>
          <StyledButton value={undefined} formMethod="dialog">
            Cancel
          </StyledButton>
          <StyledButton value="confirmed" formMethod="dialog">
            Confirm
          </StyledButton>
        </StyledMenu>
      </StyledForm>
    </StyledDialog>
  );
};

export default ConfirmModal;
