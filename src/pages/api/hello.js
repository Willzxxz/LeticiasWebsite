// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'John Doe',
    message: 'Hello World! To change this response edit src/pages/api/hello.js',
  })
}
