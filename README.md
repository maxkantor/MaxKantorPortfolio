# Max Kantor Portfolio (React + Vite)

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## AWS Amplify

- Build command: `npm ci && npm run build`
- Output directory: `dist`

## Contact API

Set the API base URL in Amplify Environment variables:

- `VITE_CONTACT_API_URL` = `https://your-api-id.execute-api.region.amazonaws.com`

For local dev, create `.env` in `/app` based on `.env.example`.
