import { stat as fsStat, Stats } from "original-fs";

export function stat(filePath: string): Promise<Stats> {
  return new Promise((resolve, reject) => {
    fsStat(filePath, (err, stats) => {
      if (err) {
        reject(err);
      }

      resolve(stats);
    });
  });
}