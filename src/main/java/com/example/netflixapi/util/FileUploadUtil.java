package com.example.netflixapi.util;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.example.netflixapi.config.AmazonS3Config;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

public class FileUploadUtil {
    public static String saveFile(AmazonS3 s3Client, AmazonS3Config amazonS3Config, MultipartFile file, String keyName) throws IOException {
        String bucketName = amazonS3Config.getBucketName();
        String fileName = file.getOriginalFilename();
        String key = keyName + fileName;

        try (InputStream inputStream = file.getInputStream()) {
            s3Client.putObject(new PutObjectRequest(bucketName, key, inputStream, null));
            return s3Client.getUrl(bucketName, key).toString();
        } catch (IOException e) {
            throw new IOException("Could not save file " + fileName + " to Amazon S3", e);
        }
    }
}
