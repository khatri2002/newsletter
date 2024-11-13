export interface ButtonProps {
  title: string;
  onClick: () => void;
}

export interface SignUpBoxProps {
  email: string;
  handleSetEmail: (email: string) => void;
  handleSubmit: () => void;
  error: boolean;
}

export interface SuccessBoxProps {
  email: string;
  handleDismiss: () => void;
}
