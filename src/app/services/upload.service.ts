import { Injectable } from '@angular/core';
import { global } from './global';
import { resolve } from 'url';

@Injectable()
export class UploadService
{
    public url: string;

    constructor()
    {
        this.url = global.url;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<file>, name: string)
    {
        return new Promise(function(resolve, reject) {
            let formData = new FormData();
            let xhr = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}