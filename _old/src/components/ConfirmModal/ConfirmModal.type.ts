export interface Props extends React.DialogHTMLAttributes<HTMLDialogElement> {
  onConfirm?: (isProceed: boolean) => void;
}
