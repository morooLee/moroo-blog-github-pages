import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import Blog, { Category, Post } from '../../lib/blog';

interface CategoriesProps {
  posts: Post[];
  categories: Category[];
  tags: string[];
}
export default function Categories({ categories }: CategoriesProps) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.name}>
              <p>{category.name}</p>
              {category.sub.length > 0 && (
                <ul>
                  {category.sub.map((subCategory) => (
                    <li key={subCategory.name}>{subCategory.name}</li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blog = Blog.getBlog();
  return {
    props: {
      ...blog,
    },
  };
};
