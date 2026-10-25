'use client';

import React from 'react';
import Link from 'next/link';
import { Button, type ButtonProps } from '@mui/material';

// MUI Button that navigates client-side with next/link. Server Components can't pass `component={Link}`
// themselves (a function can't cross into a Client Component), so they render this instead.
const LinkButton: React.FC<Omit<ButtonProps, 'href'> & { href: string }> = (props) => <Button component={Link} {...props} />;

export default LinkButton;
