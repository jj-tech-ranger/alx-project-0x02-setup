// Card Props
export interface CardProps {
  title: string;
  content: string;
}

// Button Props
export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
}

// Post Props
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// User Props
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Post Data (for modal)
export interface PostData {
  title: string;
  content: string;
}
