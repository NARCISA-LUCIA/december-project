import { ToastrService } from 'ngx-toastr';
import { CompaniesPageComponent } from './company/companies-page/companies-page.component';

export class toastrService {
  constructor(private toastrService: ToastrService) {}

  showSuccess(entityName: string) {
    this.toastrService.success(
       entityName + '` was deleted',
       'Delete'
    );
  }

  showFailure(companyName: string) {
    this.toastrService.error('Company' + companyName + 'was not removed');
  }
}
