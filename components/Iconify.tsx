import { Icon, IconProps } from "@iconify/react";

interface IconifyProps extends Omit<IconProps, 'icon'> {
    icon: string;
}

export default function Iconify({ icon, width = 24, height = 24, ...props }: IconifyProps) {
    return <Icon icon={icon} width={width} height={height} {...props} />
}