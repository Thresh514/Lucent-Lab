export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-6">欢迎来到 Lucent Lab</h1>
        <p className="text-lg text-center mb-4">这是一个使用 Next.js 和 Tailwind CSS 构建的项目</p>
        
        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Next.js 特性</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>零配置的路由系统</li>
                <li>服务端渲染 (SSR)</li>
                <li>静态站点生成 (SSG)</li>
                <li>API 路由</li>
              </ul>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Tailwind CSS 特性</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>实用优先的 CSS 框架</li>
                <li>响应式设计</li>
                <li>暗黑模式支持</li>
                <li>高度可定制</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>开始编辑 <code className="font-mono font-bold bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">src/app/page.js</code></p>
        </div>
      </div>
    </main>
  );
} 