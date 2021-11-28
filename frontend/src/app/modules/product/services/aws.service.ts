import { Injectable } from "@angular/core";
import { S3, config } from "aws-sdk";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class AWSService {
  constructor() {}
  public s3;
  public params;
  initializeS3Interface() {
    this.s3 = new S3({
      accessKeyId: environment.AWS.AccessKey,
      secretAccessKey: environment.AWS.SecrectKey,
    });
  }
  uploadedParams(productCategory, uploadedFile) {
    this.params = {
      Bucket: `boubacollection.com/assets/images/products/${productCategory}`,
      Key: uploadedFile.name,
      Body: uploadedFile,
      ContentType: "image/jpeg",
    };
  }
  async uploadFile(uploadedFile, productCategory) {
    this.uploadedParams(productCategory, uploadedFile);
    let storedData;
    config.region = "eu-central-1";
    this.initializeS3Interface();
    storedData = await this.s3.upload(this.params).promise();
    return storedData.Location;
  }
}
