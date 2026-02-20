export interface AuthModelProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface User {
  id: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
  // Add other user properties as needed
}
