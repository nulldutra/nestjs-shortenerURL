import { IsString, IsUrl } from 'class-validator';

export class CreateLinkDto {
    @IsString()
    @IsUrl({
        require_protocol: true,
        require_tld: true
    })
    targetUrl: string;
}
