import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { TocItem } from './TocItem';
import { TocLink } from './TocLink';

interface Props {
  toc: MDXRemoteSerializeResult | undefined;
}
export default function TocList({ toc }: Props) {
  return toc ? (
    <MDXRemote {...toc} components={{ a: TocLink, li: TocItem }} />
  ) : null;
}
