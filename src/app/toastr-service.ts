import { ToastrService } from 'ngx-toastr';
import { CompaniesPageComponent } from './company/companies-page/companies-page.component';

export class toastrService {
  constructor(private toastrService: ToastrService) {}

  showSuccess(companyName: string) {
    this.toastrService.success(
      'Company `' + companyName + '` was deleted',
      'Company delete'
    );
  }

  showFailure(companyName: string) {
    this.toastrService.error('Company' + companyName + 'was not removed');
  }
}
