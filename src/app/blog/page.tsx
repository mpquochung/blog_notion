import CategoryFilter from '@/components/filter/category-filter';
import SearchBar from '@/components/filter/search-bar';
import PostsGrid from '@/components/posts/posts-grid';
import { getAllPostsFromNotion } from '@/services/posts';
import { toUniqueArray } from '@/utils/to-unique-array';

export const metadata = {
  title: 'Blog',
  description: 'All posts are created by notion ai.',
};

export default async function BlogPage() {
  const allPosts = await getAllPostsFromNotion();

  const allCategories = toUniqueArray(
    allPosts
      .filter((post) => post.published)
      .map((post) => post.categories)
      .flat()
  ).sort();

  return (
    <>
      <section className="mb-16 mt-0 space-y-8 md:mt-20">
        <SearchBar />
        <CategoryFilter allCategories={allCategories} />
        <blockquote className="opacity-50">
          &quot;Behind the art, the math is crazy&quot; - I didn&apos;t said so.
          <br/> &quot;Why people always want attention?&quot; - I said so.
        </blockquote>
      </section>
      <PostsGrid allPosts={allPosts} />
    </>
  );
}