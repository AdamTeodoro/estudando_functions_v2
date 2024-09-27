/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as express from 'express';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript


const app = express();

app.get('/version', (req, res) => {
  res.status(200)
    .json({ code: 'success', codeVersion: '0.0.1' })
    .end();
  return;
});

export const api = onRequest(app);
