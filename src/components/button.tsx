import { SHADOW_NEO_B } from '@/data/style';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-sm font-medium border-2 text-sm transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-40',
  {
    variants: {
      variant: {
        default: 'bg-[#918efa] border-2 border-black text-white active:bg-indigo-500',
      },
      size: {
        default: 'px-4 py-2',
        lg: 'py-1 px-32',
        sm: 'px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  label: string;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, label, ...props }: ButtonProps, ref) => {
    const Comp = props.href ? 'a' : 'button';
    return (
      <Comp
        ref={ref as any}
        className={cn(
          SHADOW_NEO_B,
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        {...(props as any)}
      >
        {label}
      </Comp>
    );
  }
);
